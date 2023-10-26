import React, { PropsWithChildren, useState } from 'react'

import { darkTheme, lightTheme } from 'frox-design'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

export type Themes = 'light' | 'dark'

type ThemeProviderProps = PropsWithChildren<unknown>

type ThemeContextProps = {
  theme: Themes
  setTheme: React.Dispatch<React.SetStateAction<Themes>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {}
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>((localStorage.getItem('theme') as Themes) || 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderStyled theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}
