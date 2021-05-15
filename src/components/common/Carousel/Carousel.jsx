import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg'
import Card from '../Card'
import { SliderWrapper, Wrapper } from './Carousel.styles'
import Text from '../ui/Text'
import Toggle from '../Toggle'
import FlexBox from '../ui/FlexBox'
import Icon from '../ui/Icon'

const Carousel = ({ title, data, toggleOptions, onToggleChange, containerRef }) => {
	const settings = {
		swipeToSlide: true,
		arrows: data ? true : false,
		rows: 1,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		nextArrow: (
			<Icon
				className='slick-arrow slick-next'
				color='white'
				size={30}
			>
				<ChevronRight/>
			</Icon>
		),
		prevArrow: (
			<Icon
				className='slick-arrow slick-prev'
				color='white'
			>
				<ChevronLeft/>
			</Icon>
		),
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	}

	return (
		<Wrapper ref={containerRef}>
			<div/>
			<FlexBox
				alignItems='center'
				mb={3}
			>
				<Text
					bold
					color='primary'
					size={4}
					mr={4}
				>
					{title}
				</Text>
				{toggleOptions && (
					<Toggle
						options={toggleOptions}
						onChange={onToggleChange}
					/>
				)}
			</FlexBox>
			<SliderWrapper>
				<Slider {...settings}>
					{!data && new Array(5).fill(0).map((_, idx) => <Card key={idx} />)}
					{data && data.map((item) => (
						<Card
							key={item.id}
							{...item}
						/>)
					)}
				</Slider>
			</SliderWrapper>
		</Wrapper>
	)
}

Carousel.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	toggleOptions: PropTypes.array,
	onToggleChange: PropTypes.func,
	containerRef: PropTypes.any.isRequired
}

export default Carousel
