import { Link } from 'react-router-dom'

import { Card } from 'frox-design'

import * as Styled from './AppSwitcher.styled'
import EcommerceImg from './assets/ecommerce.png'
import LoginImg from './assets/login.png'
import SocialImg from './assets/social.png'

export const AppSwitcher = () => {
  return (
    <Styled.Container>
      <h1>App Switcher</h1>
      <p>
        Navigate through different applications to showcase various modules and functionalities.
        <br /> Streamline your experience and explore what our platform has to offer. <br />
        Let&apos;s get started!
      </p>
      <Styled.List $gap="md" $autoFlow="column">
        <Card centered>
          <Link to="/auth">
            <img src={LoginImg} alt="login" />
          </Link>
        </Card>
        <Card centered>
          <Link to="/ecommerce">
            <img src={EcommerceImg} alt="Ecommerce" />
          </Link>
        </Card>
        <Card centered>
          <img src={SocialImg} alt="Social Network" />
        </Card>
      </Styled.List>

      <Styled.Switcher />
    </Styled.Container>
  )
}
