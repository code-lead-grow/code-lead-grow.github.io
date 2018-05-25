import React from 'react'

import Copyright from './Copyright'

const styles = {
  mapLink: {
    margin: `16px 0`,
    textAlign: `center`,
    width: `100%`,
    display: `inline-block`,
  },
  wrap: {
    maxWidth: `872px`,
    padding: `0 12px`,
  },
}

const Footer = () => (
  <div css={styles.wrap}>
    <div css={styles.mapLink}>
      🗺📍 <a target="_blank" href="https://goo.gl/maps/SrzKH5fKwFD2">Map to our office.</a>
    </div>

    <Copyright />
  </div>
)

export default Footer;
