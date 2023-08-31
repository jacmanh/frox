import { useState } from 'react'

import { Button, darkTheme, GlobalStyles, lightTheme } from 'frox-design'
import { ThemeProvider } from 'styled-components'

function App() {
  const [theme, setTheme] = useState(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <input
          type="checkbox"
          onChange={e => setTheme(e.target.checked ? darkTheme : lightTheme)}
        />
        Hello World! <Button>Bodfdfnjour</Button>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
