/* eslint-disable @typescript-eslint/no-empty-interface */

import { CustomTheme } from '@/scss/styled-component-theme'

declare module 'styled-components' {
    interface DefaultTheme extends CustomTheme {}
    interface ThemeProps<T = DefaultTheme> {
        theme: T
    }
}
