import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { RegisterSchema } from '@app/pages/Register/Register.schema'
import FacebookImg from '@assets/facebook.png'
import GoogleImg from '@assets/google.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { authPaths } from '@routes/authRoutes'
import { Button, Checkbox, Field, Grid } from 'frox-design'
import { z } from 'zod'

import RocketImg from './assets/rocket.png'
import * as Styled from './Register.styled'

type RegisterFormValues = z.infer<typeof RegisterSchema>

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted }
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema)
  })

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <img src={RocketImg} alt="Register" />
      <h5>Create an account</h5>
      <p>You are welcome!</p>

      <Styled.Information>
        This is a demo project. <br />
        The registration is currently not functional, and no data will be saved <br />
        You will be automatically logged into a demo account.
      </Styled.Information>

      <Grid $gap="md">
        <Grid
          $gap="md"
          $templateColumns="calc(50% - 0.5rem) calc(50% - 0.5rem)"
          $alignItems="start"
        >
          <Field
            {...register('firstName')}
            label="Firstname"
            type="text"
            defaultValue="John"
            iconEnd="user"
            error={errors.firstName?.message}
          />
          <Field
            {...register('lastName')}
            label="Lastname"
            type="text"
            defaultValue="Doe"
            iconEnd="user"
            error={errors.lastName?.message}
          />
        </Grid>
        <Field
          {...register('email')}
          label="Email"
          type="email"
          placeholder="Email"
          iconEnd="email"
          error={errors.email?.message}
        />
        <Field
          {...register('password')}
          label="Password"
          type="password"
          placeholder="Password"
          iconEnd="eye"
          error={errors.password?.message}
        />
        <Field
          {...register('confirmPassword')}
          label="Confirm password"
          type="password"
          placeholder="Confirm password"
          iconEnd="eye"
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" disabled={!isValid && isSubmitted}>
          Sign Up
        </Button>

        <Checkbox
          {...register('terms')}
          label="I agree with terms and conditions"
          error={errors.terms?.message}
        />

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
          Already have an account? <Link to={authPaths.login}>Sign In</Link>
        </p>
      </Grid>
    </form>
  )
}
