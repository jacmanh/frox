import { lightTheme } from 'frox-design'
import 'styled-components'

type Theme = typeof lightTheme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
