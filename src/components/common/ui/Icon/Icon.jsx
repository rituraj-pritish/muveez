import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Icon.styled'

const Icon = ({
	children, 
	size = 16,
	color,
	className,
	onClick,
	disabled,
	circle,
	enablePropagation = false,
	styles,
	...rest
}) => {
	return (
		<Wrapper
			size={size}
			color={color}
			className={className}
			onClick={e => {
				if(!onClick) return
				
				if(!enablePropagation) e.stopPropagation()
				onClick()
			}}
			disabled={disabled}
			circle={circle}
			style={styles}
			{...rest}

			isClickable={!!onClick}
		>
			{children}
		</Wrapper>
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	circle: PropTypes.bool,
	enablePropagation: PropTypes.bool
}

export default Icon
