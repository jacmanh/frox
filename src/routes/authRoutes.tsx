import { AuthLayout } from '@components/layouts/AuthLayout/AuthLayout'

export const authPaths = {
  login: '/auth/login',
  register: '/auth/register'
}

export const authRoutes = {
  path: 'auth',
  element: <AuthLayout />,
  children: [
    {
      index: true,
      async lazy() {
        const { Login } = await import('@pages/Login/Login')
        return {
          Component: Login
        }
      }
    },
    {
      path: 'login',
      async lazy() {
        const { Login } = await import('@pages/Login/Login')
        return {
          Component: Login
        }
      }
    },
    {
      path: 'register',
      async lazy() {
        const { Register } = await import('@pages/Register/Register')
        return {
          Component: Register
        }
      }
    }
  ]
}
