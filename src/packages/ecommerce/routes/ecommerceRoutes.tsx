import { MainLayout } from '@components/layouts/MainLayout/MainLayout.tsx'

export const ecommercePaths = {
  dashboard: '/dashboard'
}

export const ecommerceRoutes = {
  path: 'ecommerce',
  element: <MainLayout />,
  children: [
    {
      index: true,
      async lazy() {
        const { Dashboard } = await import('@ecommerce/pages/Dashboard/Dashboard')
        return {
          Component: Dashboard
        }
      }
    }
  ]
}
