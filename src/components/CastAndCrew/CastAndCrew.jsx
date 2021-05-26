import React from 'react'
import { useHistory, useParams } from 'react-router'

import PageTitle from 'components/common/PageTitle'
import { useQuery } from 'react-query'

import { getMovieDetails } from 'api/endpoints/movies'
import { getTvDetails } from 'api/endpoints/tv'
import useTitle from 'hooks/useTitle'

const CastAndCrew = () => {
	const history = useHistory()
	const { movieId, tvId } = useParams()
	const mediaType = history.location.pathname.includes('movie')
		? 'movie' : 'tv'
	const mediaId = movieId || tvId

	const { data } = useQuery(
		[mediaType, mediaId],
		() => mediaType === 'movie' ? getMovieDetails(mediaId) : getTvDetails(mediaId),
	)
	useTitle(`Cast & Crew - ${data?.title || data?.name}`)
	
	return (
		<div>
			<PageTitle
				title='Cast & Crew'
				ancestors={[
					{ text: data?.title || data?.name , path: `/${mediaType}/${mediaId}` }
				]}
			/>
		</div>
	)
}

export default CastAndCrew
