import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import FacebookImg from '@assets/facebook.png'
import GoogleImg from '@assets/google.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@pages/Login/Login.schema.ts'
import * as Styled from '@pages/Register/Register.styled.ts'
import { authPaths } from '@routes/authRoutes.tsx'
import { Button, Field, Grid } from 'frox-design'
import { z } from 'zod'

import LandingImg from './assets/landing.png'

type LoginFormValues = z.infer<typeof LoginSchema>

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema)
  })

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <img src={LandingImg} alt="Login" />
      <h5>Welcome back!</h5>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>Let's build something great!</p>

      <Grid $gap="md">
        <Field
          {...register('email')}
          label="Email"
          type="email"
          iconEnd="email"
          error={errors.email?.message}
        />
        <Field
          {...register('password')}
          label="Password"
          type="password"
          iconEnd="eye"
          error={errors.password?.message}
        />

        <Button type="submit" disabled={!isValid && isSubmitted}>
          Login
        </Button>

        <Grid $gap="md" $autoFlow="column" $alignItems="center">
          <Styled.Button $ghost type="button">
            <img src={GoogleImg} alt="" /> Google account
          </Styled.Button>
          <Styled.Button $ghost type="button">
            <img src={FacebookImg} alt="" />
            Facebook account
          </Styled.Button>
        </Grid>

        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account? <Link to={authPaths.register}>Register</Link>
        </p>
      </Grid>
    </form>
  )
}
