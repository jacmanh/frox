import { createBrowserRouter } from 'react-router-dom'

import { AppSwitcher } from '@app/pages/AppSwitcher/AppSwitcher'
import { ecommerceRoutes } from '@ecommerce/routes/ecommerceRoutes.tsx'
import { authRoutes } from '@routes/authRoutes'

const defaultRoute = {
  path: '/',
  element: <AppSwitcher />
}

export const router = createBrowserRouter([defaultRoute, authRoutes, ecommerceRoutes])
