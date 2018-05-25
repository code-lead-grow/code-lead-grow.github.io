import React, { Component } from 'react';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';

const styles = {
  button(show) {
    return {
      backgroundColor: show ? `transparent` : `#cf2de6`,
      margin: `1px 0 0 1px`,
      borderRadius: `0 4px 4px 4px`,
      border: `none`,
      boxShadow: `none`,
      color: `white`,
      height: 125,
      width: 127,
      fontSize: `12px`,
      outline: `none`,
      cursor: `pointer`,
      fontSize: 24,
      fontFamily: `'Nunito', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
      transition: `box-shadow .25s ease-in-out`,
      '&:hover': {
        boxShadow: `${show ? '0 0 0 4px #cf2de6 inset' : '0 0 0 10px rgba(255, 255, 255, 0.15) inset'}`,
      },
      '&:focus': {
        outline: `none`,
      },
    };
  },
  tippy: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
  },
  tippySpan: {
    width: `100%`,
    height: 62.5,
    color: `white`,
    justifyContent: `center`,
    display: `flex`,
    flexDirection: `column`,
    transition: `color .5s ease-in-out`,
  },
  wrap: {
    position: `absolute`,
    width: `100%`,
  },
  wrapOuter: {
    position: `relative`,
  },
  list: {
    display: `flex`,
    flexDirection: `column`,
    listStyle: `none`,
    overflow: `hidden`,
  },
  listItem: {
    margin: 0,
    padding: 0,
    alignItems: `center`,
    justifyContent: `center`,
    borderRadius: `0 0 4px 4px`,
    display: `flex`,
    textAlign: `center`,
    backgroundColor: `#cf2de6`,
    transition: `background-color .25s ease-in-out`,
    '&:hover': {
      backgroundColor: `#8e1d9e`,
    },
    '&:first-child': {
      boxShadow: `0 -2px #f7f7f7 inset`,
      borderRadius: `4px 4px 0 0`,
      zIndex: 0,
    },
  },
};

export default class ContactBar extends Component {
  state = { show: false };

  render() {
    const { show } = this.state;

    return (
      <div css={styles.wrapOuter}>
        {show === false
          ? (
          <button
            css={styles.button(show)}
            onClick={() => this.setState({ show: !show })}
          >
            Contact
          </button>
        ) : (
          <div css={styles.button(show)}>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <Tooltip
                  interactive
                  position="top"
                  style={styles.tippy}
                  title="hello@codeleadgrow.com"
                  trigger="click"
                >
                  <span css={styles.tippySpan}>
                    email
                  </span>
                </Tooltip>
              </li>
              <li css={styles.listItem}>
                <Tooltip
                  interactive
                  position="top"
                  style={styles.tippy}
                  title="+977 9808302870"
                  trigger="click"
                >
                  <span css={styles.tippySpan}>
                    mobile
                  </span>
                </Tooltip>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
