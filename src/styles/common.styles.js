const styles = {
  getHeaderStyles(size, color) {
    return {
      fontFamily: `Arsenal, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      fontSize: size || `inherit`,
      color: color || `#ea4268`,
    };
  },
  h1: {
    textTransform: `uppercase`,
    paddingBottom: 12,
    borderBottom: `2px solid`,
    display: `inline-block`,
  },
  h1Post: {
    display: `inline-block`,
    marginBottom: 0,
  },
  postListItem: {
    margin: `48px 0 0 0`,
  },
  box(isSmallScreen) {
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
};

export default styles