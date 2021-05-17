import React from 'react'

import { ReactComponent as SunIcon } from 'assets/icons/sun.svg'
import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg'
import { IconContainer, Wrapper } from './ThemeToggle.styles'
import useTheme from 'hooks/useTheme'

const ThemeToggle = () => {
	const { isDarkMode } = useTheme()
	return (
		<Wrapper>
			<IconContainer>
				{isDarkMode ? <MoonIcon/> : <SunIcon/>}
			</IconContainer>
		</Wrapper>
	)
}

export default ThemeToggle
