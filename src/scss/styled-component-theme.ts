/* eslint-disable @typescript-eslint/no-explicit-any */
// Media queries breakpoints
// Extra small screen / phone
// @screen-xs: 480px;
// @screen-xs-min: @screen-xs;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const xsMin = 480

// Small screen / tablet
// @screen-sm: 576px;
// @screen-sm-min: @screen-sm;
const smMin = 576

// Medium screen / desktop
// @screen-md: 768px;
// @screen-md-min: @screen-md;
const mdMin = 768

// Large screen / wide desktop
// @screen-lg: 992px;
// @screen-lg-min: @screen-lg;
const lgMin = 992

// Extra large screen / full hd
// @screen-xl: 1200px;
// @screen-xl-min: @screen-xl;
// @screen-xl-min: @screen-xl;
const xlMin = 1200

// Extra extra large screen / large desktop
// @screen-xxl: 1600px;
// @screen-xxl-min: @screen-xxl;
const xxlMin = 1600

// provide a maximum
// @screen-xs-max: (@screen-sm-min - 1px);
// @screen-sm-max: (@screen-md-min - 1px);
// @screen-md-max: (@screen-lg-min - 1px);
// @screen-lg-max: (@screen-xl-min - 1px);
// @screen-xl-max: (@screen-xxl-min - 1px);

const xsMax = xsMin - 1
const smMax = smMin - 1
const mdMax = mdMin - 1
const lgMax = lgMin - 1
const xlMax = xlMin - 1
const xxlMax = xxlMin - 1

interface SwitchProps {
    default: unknown
}

export const theme = {
    switch: <T extends SwitchProps>(key?: string, conditions?: T) => {
        if (!conditions) return ''
        if (!key) return conditions.default
        return (conditions as any)[key] || conditions.default
    },
    breakpoints: {
        xs: {
            value: xsMin,
            up: `@media screen and (min-width : ${xsMin}px)`,
            down: `@media screen and (max-width : ${xsMax}px)`,
        },
        sm: {
            value: smMin,
            up: `@media screen and (min-width : ${smMin}px)`,
            down: `@media screen and (max-width : ${smMax}px)`,
        },
        md: {
            value: mdMin,
            up: `@media screen and (min-width : ${mdMin}px)`,
            down: `@media screen and (max-width : ${mdMax}px)`,
        },
        lg: {
            value: lgMin,
            up: `@media screen and (min-width : ${lgMin}px)`,
            down: `@media screen and (max-width : ${lgMax}px)`,
        },
        xl: {
            value: xlMin,
            up: `@media screen and (min-width : ${xlMin}px)`,
            down: `@media screen and (max-width : ${xlMax}px)`,
        },
        xxl: {
            value: xxlMin,
            up: `@media screen and (min-width : ${xxlMin}px)`,
            down: `@media screen and (max-width : ${xxlMax}px)`,
        },
    },
    prefers_color_scheme: '@media (prefers-color-scheme: dark)',
}

export type CustomTheme = typeof theme
