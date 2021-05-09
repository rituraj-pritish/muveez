import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { BUTTON_TYPES, BUTTON_VARIANTS } from 'constants/buttons'
import theme from 'theme'

const getColor = (variant, type, theme, isDarkMode) => {
	if(type === BUTTON_TYPES.OUTLINED) {
		return getBgColor(variant, BUTTON_TYPES.DEFAULT, theme)
	} else {
		if (variant === BUTTON_VARIANTS.SECONDARY) {
			return isDarkMode ? theme.colors.black : theme.colors.white
		} else {
			return theme.colors.white
		}
	}
}

const getBgColor = (variant, type, theme) => {
	if(type === BUTTON_TYPES.OUTLINED) {
		return theme.colors.appBg
	} else {
		switch(variant) {
		case BUTTON_VARIANTS.SECONDARY:
			return theme.colors.secondary
    
		case BUTTON_VARIANTS.DANGER:
			return theme.colors.danger

		case BUTTON_VARIANTS.CANCEL:
			return theme.colors.cancel

		default: return theme.colors.primary
		}
	}
}

export const StyledButton = styled.div`
	border-radius: ${theme.borderRadius};
	width: fit-content;
	height: fit-content;
	font-weight: bold;
	cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
	box-sizing: border-box;

	${({ theme, variant, type, isDarkMode }) => {
		const bgColor = getBgColor(variant, type, theme)
		const color = getColor(variant, type, theme, isDarkMode)

		return css`
			background: ${bgColor};
			color: ${color};
			box-shadow: ${type === BUTTON_TYPES.OUTLINED ? `0 0 0 2px ${color}` : 'none'};
		`
	} 
}
	
	${space}
`
