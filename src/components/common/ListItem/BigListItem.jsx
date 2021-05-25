import React from 'react'
import PropTypes from 'prop-types'

import { RightSection, Wrapper } from './ListItem.styles'
import Text from '../ui/Text'
import moment from 'moment'
import Genres from '../Genres'
import Image from '../ui/Image'
import POSTER_SIZES from 'constants/imageSizes'
import Link from '../ui/Link'
import Skeleton from '../ui/Skeleton'
import MediaActions from 'components/MediaActions'
import FlexBox from '../ui/FlexBox'

const DATE_FORMAT = 'DD MMM YYYY'

const BigListItem = ({
	poster_path,
	title,
	release_date,
	overview,
	media_type,
	genre_ids,
	id
}) => {
	if(!id) return (
		<Wrapper>
			<Skeleton
				width={200}
				height='100%'
			/>
			<RightSection>
				<Skeleton
					width='35%'
					height={20}
					mb={3}
				/>
				<Skeleton
					width='100%'
					height={16}
					mb={1}
				/>
				<Skeleton
					width='100%'
					height={16}
				/>
				<Skeleton
					count={3}
					width={70}
					height={16}
					mt={3}
					mr={3}
				/>
				<Skeleton
					mt={3 }
					count={4}
					mr={3}
					circle
					height={45}
					width={45}
				/>
			</RightSection>
		</Wrapper>
	)

	return (
		<Wrapper>
			<Link>
				<Image
					url={poster_path}
					width={200}
					imageSize={POSTER_SIZES.MEDIUM}
				/>   
			</Link>
			<RightSection>
				<Link
					bold
					color='primary'
					mb={2}
					size={3}
				>
					{title}
				</Link>
				<Text
					color='textTertiary'
					size={1}
				>
					{moment(release_date).format(DATE_FORMAT)}
				</Text>
				<Text my={3}>
					{overview}
				</Text>
				<Genres ids={genre_ids} />
				<FlexBox mb={3}/>
				<MediaActions
					mediaType={media_type}
					mediaId={id}
				/>
			</RightSection>   
		</Wrapper>
	)
}

BigListItem.propTypes = {
	poster_path: PropTypes.string,
	title: PropTypes.string,
	release_date: PropTypes.string,
	overview: PropTypes.string,
	id: PropTypes.number,
	media_type: PropTypes.string,
	includeType: PropTypes.bool,
	genre_ids: PropTypes.array,
}

export default BigListItem
