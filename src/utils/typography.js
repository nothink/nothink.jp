import Typography from "typography"
import Tofu from "typography-theme-japanese-tofu"

Tofu.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

// delete Tofu.googleFonts

const typography = new Typography(Tofu)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const { rhythm, scale } = typography
