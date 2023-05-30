import gray from "gray-percentage"
import Typography from 'typography'
import stAnnesTheme from 'typography-theme-st-annes'

const typography = new Typography({
    ...stAnnesTheme,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options, styles)  => ({
        blockquote: {
            ...scale(1 / 5),
            color: gray(41),
            paddingLeft: rhythm(18 / 16),
            marginLeft: 0,
            borderLeft: `${rhythm(6 / 16)} solid`,
            borderColor: "#65B8CD",
          },
      })
})
export default typography