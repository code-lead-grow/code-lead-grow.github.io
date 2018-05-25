import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Media from 'react-media';
import Helmet from 'react-helmet';
import 'typeface-arsenal';
import 'typeface-nunito';

import ContactBar from '../components/ContactBar';
import Footer from '../components/Footer';
import SquareMenu from '../components/SquareMenu';
import './site.css';
import logo from './img/logo.svg';

const styles = {
  children: { flex: 1 },
  getContentStyle(pathname) {
    return {
      display: `flex`,
      padding: pathname === '/' ? `0px 12px` : `72px 12px`,
      flex: 1,
      width: `100%`,
    };
  },
  headerWrap: {
    display: `flex`,
    flexDirection: `row-reverse`,
    maxWidth: 1000,
    height: 254,
  },
  headerLeftWrap: {
    display: `flex`,
    flexDirection: `column`,
    marginRight: 1,
  },
  logo: {
    maxWidth: 127,
    width: 127,
    height: 127,
  },
  navMenuWrap: {
    width: `100%`,
  },
  spacer: {
    width: 117,
    flexShrink: 0,
  },
};

let fbSDKLoaded = false;

const scrollToId = (id) => {
  var doc = document.documentElement;
  setTimeout(() => {
    if ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0) > 100) return;
    window.scroll({top: document.getElementById(id).getBoundingClientRect().top + ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)), behavior: 'smooth'})
  }, 300);
};

const Header = ({ pathname }) => (
  <header css={styles.headerWrap}>
    <div css={styles.headerLeftWrap}>
      <Link css={styles.logo} to="/">
        <img src={logo} />
      </Link>

      <ContactBar />
    </div>
    <SquareMenu />
  </header>
)

export default class TemplateWrapper extends Component {
  componentDidMount() {
    if (fbSDKLoaded === false) {
      /* eslint-disable */
      window.fbAsyncInit = function() {
        FB.init({
          appId            : '1072563579549724',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.0'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_GB/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      /* eslint-enable */

      fbSDKLoaded = true;
    }

    if (this.props.location.pathname !== '/') scrollToId('wrap');
  }

  componentDidUpdate() {
    if (this.props.location.pathname !== '/') scrollToId('wrap');
  }

  render() {
    function createMarkup() {
      return {
        __html: `<div
          className="fb-customerchat"
          page_id="2069956563290334"
        />`,
      };
    }

    const { children, location: { pathname } } = this.props;
    return (
      <div>
        <Helmet
          title="Become better at writing code @ Code Lead Grow"
          meta={[
            { name: 'description', content: 'We stretch your programming skills and make you better. Come join us for a workshop, or get in touch for small group / company classes.' },
          ]}
        />

        <Header pathname={pathname} />
        <Media query="screen and (max-width: 700px)">
          {matches => (
            <div id="wrap" className="wrap">
              <div css={styles.getContentStyle(pathname)} className="content">
                <div css={styles.children}>{children()}</div>
              </div>
            </div>
          )}
        </Media>

        {/* copyright */}
        <Footer />

        {/* facebook messenger plugin */}
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
