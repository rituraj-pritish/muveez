import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Carousel from './Carousel'
import usePositionOffset from 'hooks/usePositionOffset'
import useCarouselData from 'hooks/useCarouselData'

const CarouselContainer = ({ path, toggleOptions, ...rest }) => {
	const [ref, isTriggered] = usePositionOffset(300)
	const queries = useCarouselData(
		path ? [path] : toggleOptions.map(({ value }) => value)
	)
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
	const [data, setData] = useState(null)

	useEffect(() => {
		if (!isTriggered) return
		queries[selectedOptionIndex].refetch()
	}, [isTriggered])

	useEffect(() => {
		if (queries[selectedOptionIndex].isSuccess) {
			setData(queries[selectedOptionIndex].data.results)
		}
	}, [queries])

	const onToggleChange = val => {
		const idx = toggleOptions.findIndex(({ value }) => value === val)
		if(!queries[idx].isSuccess) {
			queries[idx].refetch()
		}
		setSelectedOptionIndex(idx)
	}

	return (
		<Carousel
			containerRef={ref}
			toggleOptions={toggleOptions}
			onToggleChange={onToggleChange}
			data={data}
			{...rest}
		/>
	)
}

CarouselContainer.propTypes = {
	path: PropTypes.string,
	toggleOptions: PropTypes.array
}

export default CarouselContainer
