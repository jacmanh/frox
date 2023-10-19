import { ThemeProvider } from '@components/molecules/ThemeProvider/ThemeProvider'
import { GlobalStyles } from 'frox-design'

import { Register } from './pages/Register/Register.tsx'

function App() {
  return (
    <ThemeProvider>
      <>
        <GlobalStyles />
        <Register />
      </>
    </ThemeProvider>
  )
}

export default App
