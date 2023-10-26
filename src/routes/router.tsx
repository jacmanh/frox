import { createBrowserRouter, Navigate } from 'react-router-dom'

import { authRoutes } from '@routes/authRoutes'

const defaultRoute = {
  path: '/',
  element: <Navigate to="/auth" />
}

export const router = createBrowserRouter([defaultRoute, authRoutes])
