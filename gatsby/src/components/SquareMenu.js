import React from 'react'
import Link from 'gatsby-link'

const SquareMenu = () => (
  <div css={styles.wrap}>
    <div css={styles.squareRowStyles}>
      <Link to="/events" css={styles.button('leftTop', '#111', 'Focus')}>
        Conference &amp; Events
      </Link>
      <Link to="/training" css={styles.button('rightTop', '#3198c6', 'Grow')}>
        Personal Training
      </Link>
    </div>
    <div css={styles.squareRowStyles}>
      <Link to="/blog" css={styles.button('leftBottom', '#9bc043', 'Absorb')}>
        Blog
      </Link>
      <Link to="/about" css={styles.button('rightBottom', '#e94269', 'Ke chha?')}>
        About
      </Link>
    </div>
  </div>
)

const styles = {
  _baseButton: {
    flex: 1,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `125px`,
    textAlign: `center`,
    padding: `24px`,
    margin: `1px`,
    color: `white`,
    position: `relative`,
    overflow: `hidden`,
    fontSize: `24px`,
    cursor: `pointer`,
    boxShadow: `none`,
    transition: `box-shadow .25s ease-in-out`,
    '&:after': {
      position: `absolute`,
      bottom: `22px`,
      left: 0,
      height: `25px`,
      width: `auto`,
      display: `inline-block`,
      fontSize: `48px`,
      opacity: .25,
      '@media(max-width: 480px)': {
        fontSize: 24,
        bottom: 0,
      },
    },
    '&:hover': { boxShadow: `0 0 0 10px rgba(255, 255, 255, 0.15) inset` },
  },
  button(position, backgroundColor, afterText) {
    const getBorderRadius = (pos, size) => {
      const MAP = {
        leftTop: `${size}px 0 0 0`,
        rightTop: `0 ${size}px 0 0`,
        rightBottom: `0 0 ${size}px 0`,
        leftBottom: `0 0 0 ${size}px`,
      };
      return MAP[pos] || `${size}px`
    };

    return {
      ...this._baseButton,
      backgroundColor,
      borderRadius: getBorderRadius(position, 4),
      '&:after': {
        ...this._baseButton['&:after'],
        content: `${afterText}`,
      },
      '@media(max-width: 480px)': {
        height: 61.15,
        fontSize: 16,
        padding: 12,
        borderRadius: getBorderRadius(null, 4)
      },
    };
  },
  squareRowStyles: {
    display: `flex`,
    width: `100%`,
    '@media(max-width: 480px)': {
      flexDirection: `column`,
    },
  },
  wrap: { flex: 1, width: '100%' },
};

export default SquareMenu
