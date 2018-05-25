import React from 'react';
import Media from 'react-media';
import Link from 'gatsby-link';

const styles = {
  getStarted: {
    background: `#fdc486`,
    boxShadow: `7px 7px 2px #f1f1f1`,
    color: `black`,
    padding: `12px 24px`,
    borderRadius: 4,
  },
  homeBox(isSmallScreen) {
    return {
      flex: 1,
      padding: '0 12px 24px',
    };
  },
  wrap(isSmallScreen) {
    return {
      display: `flex`,
      flexDirection: isSmallScreen ? `column` : `row`,
    };
  },
  wrapOuter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
};

const SellActions = ({ showHeader }) => (
  <Media query="screen and (max-width: 700px)">
    {matches => (
      <div style={styles.wrapOuter}>
        {showHeader && <h2>Ready?</h2>}
        <div css={styles.wrap(matches)}>
          <div css={styles.homeBox(matches)}>
            <h3>Just casual</h3>
            <p>We give weekend workshops to stretch your arsenal of programming techniques.</p>
            <div><Link to="/events" css={styles.getStarted}>Join a <b>Lightning ⚡️ Workshop</b> &rarr;</Link></div>
          </div>
          <div css={styles.homeBox(matches)}>
            <h3>&ldquo;I want to learn tons.&rdquo;</h3>
            <p>A 1 or 2 day conference where our experts make you smarter. This is currently being developed.</p>
            <div><Link to="/events" css={styles.getStarted}>Join an <b>Experts 👩🏽‍🏫 Conference</b> &rarr;</Link></div>
          </div>
        </div>
      </div>
    )}
  </Media>
);

export default SellActions;
