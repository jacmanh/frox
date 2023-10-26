import React, { useContext } from 'react'

import { ThemeContext, Themes } from '@components/molecules/ThemeProvider/ThemeProvider.tsx'
import { Icon, Toggle } from 'frox-design'

import * as Styled from './ThemeSwitcher.styled.ts'

type ThemeSwitcherProps = {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const isChecked = theme === 'dark'

  const switchTheme = (e: React.SyntheticEvent<HTMLInputElement>) => {
    let newTheme: Themes = 'light'
    if (e.currentTarget.checked) {
      newTheme = 'dark'
    }

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <Styled.Container className={className}>
      <Styled.Sun name="sun" />
      <Toggle id="theme" name="theme" defaultChecked={isChecked} onChange={switchTheme} />
      <Icon name="moon" />
    </Styled.Container>
  )
}
