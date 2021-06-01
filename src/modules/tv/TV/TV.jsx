import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'

import { getTvDetails } from 'api/endpoints/tv'
import Carousel from 'components/common/Carousel/Carousel'
import MediaOverview from 'components/MediaOverview'
import useTitle from 'hooks/useTitle'
import Images from 'components/common/Images'
import Videos from 'components/common/Videos'

const TV = () => {
	const { tvId } = useParams()
	const { data } = useQuery(
		['tv', tvId],
		() => getTvDetails(tvId),
	)

	useTitle(`${data?.name} - TV`)

	return (
		<>
			<MediaOverview {...data} />
			<Carousel
				title='Cast'
				person
				data={data?.credits?.cast}
				viewAllLink={`/tv/${tvId}/credits/cast`}
				my={3}
			/>

			<Images
				data={data?.images}
				mb={4}
				viewAllLink={`/tv/${data?.id}/media/photos`}
			/>
			<Videos 
				data={data?.videos?.results}
				viewAllLink={`/tv/${data?.id}/media/videos`}
			/>

			<Carousel
				title='Crew'
				person
				data={data?.credits?.crew}
				viewAllLink={`/tv/${tvId}/credits/crew`}
				mt={4}
			/>
		</>
	)
}

export default TV
