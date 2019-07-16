import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import kirkham from "typography-theme-kirkham"

kirkham.overrideThemeStyles = ({ rhythm }, options) => ({
  "table caption": {
    textAlign: "left",
    fontWeight: "bold",
  },
})

const typography = new Typography(kirkham)

export const { scale, rhythm, options } = typography
export default typography
