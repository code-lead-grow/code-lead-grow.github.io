import React from 'react'
import Link from 'gatsby-link'

import { CSS_FONT_BODY } from '../settings'
import { ShadeRGBColor } from '../utils'

const NavMenu = () => (
  <div css={styles.wrap}>
    <Link to="/events" css={styles.events()}>
      Workshops &amp; Events
    </Link>
    <Link to="/training" css={styles.training()}>
      Training
    </Link>
    <Link to="/blog" css={styles.blog()}>
      Blog
    </Link>
    <Link to="/about-us" css={styles.about()}>
      About
    </Link>
  </div>
)

export default NavMenu

const styles = {
  _base: {
    boxShadow: `none`,
    fontFamily: CSS_FONT_BODY,
    fontSize: `16px`,
    padding: 24,
    transition: `box-shadow .05s ease-in-out`,
  },
  _baseHover: { borderRadius: `4px` },
  button(color, background, shadow) {
    return {
      ...this._base,
      color,
      '&:hover': {
        ...this._baseHover,
        background,
        boxShadow: `${ShadeRGBColor(shadow, .25)} 5px 5px 0px 0, ${shadow} 10px 10px 0px 0`,
      }
    }
  },
  events() {
    return this.button('#111111', '#f7f7f7', 'rgb(68, 68, 68)');
  },
  training() {
    return this.button('#3198c6', '#def5ff', 'rgb(85, 184, 228)');
  },
  blog() {
    return this.button('#9bc043', '#e0fde0', 'rgb(176, 216, 82)');
  },
  about() {
    return this.button('#e94269', '#ffeaed', 'rgb(241, 119, 146)');
  },
  wrap: {
    display: `flex`,
    justifyContent: `space-evenly`,
    marginBottom: 24,
  },
}
