import React from 'react'
import PropTypes from 'prop-types'
import { Ring } from 'react-spinners-css'

import { BUTTON_VARIANTS, BUTTON_TYPES } from 'constants/buttons'
import { SpinnerWrapper, StyledButton, getColor } from './Button.styles'
import useTheme from 'hooks/useTheme'
import Text from '../Text'

const Button = ({
	variant = BUTTON_VARIANTS.PRIMARY,
	type = BUTTON_TYPES.DEFAULT,
	children,
	loading = false,
	...rest
}) => {
	const { isDarkMode, theme } = useTheme()

	return (
		<StyledButton
			variant={variant}
			type={type}
			isDarkMode={isDarkMode}
			loading={loading}
			{...rest}
		>
			{loading && (
				<SpinnerWrapper>
					<Ring 
						size={28}
						color={getColor(variant, type, theme, isDarkMode)}
					/>
				</SpinnerWrapper>
			)}
			<Text color={loading ? 'transparent' : undefined}>
				{children}
			</Text>
		</StyledButton>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf([...Object.values(BUTTON_VARIANTS)]),
	type: PropTypes.oneOf([...Object.values(BUTTON_TYPES)]),
	children: PropTypes.node.isRequired,
	loading: PropTypes.bool
}

export default Button
