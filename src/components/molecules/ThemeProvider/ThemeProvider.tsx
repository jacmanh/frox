import React, { PropsWithChildren, useState } from 'react'

import { darkTheme, Icon, lightTheme, Toggle } from 'frox-design'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import * as Styled from './ThemeProvider.styled'

type Themes = 'light' | 'dark'

type ThemeProviderProps = PropsWithChildren<unknown>

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>((localStorage.getItem('theme') as Themes) || 'light')
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
    <ThemeProviderStyled theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}

      <Styled.Container>
        <Styled.Sun name="sun" />
        <Toggle id="theme" name="theme" defaultChecked={isChecked} onChange={switchTheme} />
        <Icon name="moon" />
      </Styled.Container>
    </ThemeProviderStyled>
  )
}
