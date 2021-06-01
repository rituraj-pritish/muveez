import React from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'

import { capitalize } from 'helpers/string'
import { getMovieDetails } from 'api/endpoints/movies'
import { getTvDetails } from 'api/endpoints/tv'
import useTitle from 'hooks/useTitle'
import ImageCard from 'components/common/Images/ImageCard'
import PageTitle from 'components/common/PageTitle'
import VideoCard from 'components/common/Videos/VideoCard'
import List from 'components/List'
import { ListWrapper } from './MediaPage.styles'
import { filterFn, getUniqueElements } from 'helpers/array'

const MediaPage = () => {
	const history = useHistory()
	const { movieId, tvId, mediaType: type } = useParams()
	const mediaType = history.location.pathname.includes('movie') ? 'movie' : 'tv'
	const mediaId = movieId || tvId

	const { data } = useQuery([mediaType, mediaId], () =>
		mediaType === 'movie' ? getMovieDetails(mediaId) : getTvDetails(mediaId)
	)
	useTitle(`${capitalize(type)} - ${data?.title || data?.name}`)

	const isVideos = type === 'videos'

	const list = isVideos 
		? data?.videos?.results 
		: data ? [...data?.images?.backdrops, ...data?.images?.posters] : []

	const videoTypes = isVideos
		? getUniqueElements(list?.map(({ type }) => type))
		: null

	return (
		<div>
			<PageTitle
				title={type}
				ancestors={[
					{ title: data?.title || data?.name, path: `/${mediaType}/${mediaId}` }
				]}
			/>
			<List
				onlyGrid
				data={list}
				uniqueIdentifier={null}
				itemsOnOnePage={isVideos ? 15 : 21}
				filter={type === 'video' ? {
					initialValue: 'all',
					options: [
						{ label: 'All', value: 'all' },
						...videoTypes?.map(type => ({
							label: type,
							value: `type/${type}`
						}))
					],
					filterFn
				} : undefined}
				dataRender={(data) => {
					return (
						<ListWrapper>
							{type !== 'videos' && data.map(item => (
								<ImageCard
									key={item.key}
									{...item}
									triggerStyles={{
										width: 'auto',
										height: 200
									}}
								/>
							)) }
							{isVideos && data.map(({ key }) => (
								<VideoCard
									key={key}
									videoKey={key}
									height={250}
									width='auto'
								/>
							))}
						</ListWrapper>
					)
				}}
			/>
		</div>
	)
}

MediaPage.propTypes = {}

export default MediaPage
