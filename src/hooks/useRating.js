import React, { useState } from 'react'
import { useEffect } from 'react'
import { useMutation, useQueries } from 'react-query'

import { getRatedMedia } from 'api/endpoints/media'
import { deleteRating, rateMedia } from 'api/endpoints/media'
import useAuthentication from './useAuthentication'

export default (mediaId, mediaType) => {
	const { user } = useAuthentication()
	const [isLoading, setIsLoading] = useState(false)
	const accountId = user?.id

	const [movies, shows] = useQueries([
		{ 
			queryKey: ['rated', 'movies'], 
			queryFn: () => getRatedMedia(accountId, 'movies'), 
			enabled: false
		},
		{ 
			queryKey: ['rated', 'tvs'], 
			queryFn: () => getRatedMedia(accountId, 'tv'), 
			enabled: false 
		}
	])

	const refetchRecords = React.useCallback(() => {
		const refetchFunction = mediaType === 'movie' ? movies.refetch : shows.refetch
		setTimeout(() => {
			refetchFunction()
				.then(() => setIsLoading(false))
		}, 1000)
	}, [mediaType])

	const mutateOptions = {
		onMutate: () => setIsLoading(true),
		onSuccess: refetchRecords
	}

	const { mutate: remove } = useMutation(
		() => deleteRating(mediaType, mediaId),
		mutateOptions
	)
	const { mutate: rate } = useMutation(
		(r) => rateMedia(mediaType, mediaId, (r * 2)),
		mutateOptions
	)

	useEffect(() => {
		if(accountId && !movies.isFetched && !shows.isFetched) {
			movies.refetch()
			shows.refetch()
		}
	}, [accountId])

	const ratedMovies = movies.data?.results || []
	const ratedShows = shows.data?.results || []

	const list = mediaType === 'movie' ? ratedMovies : ratedShows
	const media = list.find(({ id }) => id === mediaId)

	const rating = media ? (media?.rating / 2) : null
	
	return {
		rating,
		deleteRating: remove,
		rate,
		isLoading
	}
}