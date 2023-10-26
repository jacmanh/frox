import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@components/molecules/ThemeProvider/ThemeProvider.tsx'
import { router } from '@routes/router'
import { GlobalStyles } from 'frox-design'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />

      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
