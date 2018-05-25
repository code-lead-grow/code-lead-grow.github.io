import React from 'react';

const Copyright = () => (
  <div>
    <small css={styles.copyrightStyles}>&copy; <span>{copyrightDate()}</span> Code Lead Grow</small>
    <small css={styles.copyrightStyles}>Code Lead Grow Pvt. Ltd. (PAN# 603761739) is a registered Nepali Private Limited company.</small>
  </div>
)

const copyrightDate = () => {
  var date = new Date()
  var year = date.getFullYear()
  return year
}

const styles = {
  copyrightStyles: {
    marginTop: `16px`,
    textAlign: `center`,
    width: `100%`,
    display: `inline-block`,
  },
};

export default Copyright
