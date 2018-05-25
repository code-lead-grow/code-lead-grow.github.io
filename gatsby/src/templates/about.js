import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import { UnpackMarkdownNode } from '../utils';
import commonStyles from '../styles/common.styles';
import adamImg from '../pages/about/img/adam-tombleson.jpg';
import jerImg from '../pages/about/img/jeremiah-trein.jpg';
import pombaImg from '../pages/about/img/pomba-magar.jpg';
import youImg from '../pages/about/img/team-you-blank.png';

const teamWrapStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  '@media(max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const avatarWrapStyles = {
  position: 'relative',
  display: 'flex',
  backgroundColor: '#FFF',
  marginBottom: 24,
  flexDirection: 'column',
  '& h3': { marginTop: '12px !important' },
};

const avatarStyles = {
  borderRadius: '4px',
  overflow: 'hidden',
  height: '200px',
  flexShrink: 0,
};

const About = ({ data }) => {
  const { title, html } = UnpackMarkdownNode(data);
  return (
    <div>
      <Helmet title="About us - Code Lead Grow" />

      <header>
        <h1 css={{ ...commonStyles.h1, ...commonStyles.getHeaderStyles('1.5em') }}>{title}</h1>
      </header>

      {/* parsed markdown */}
      <div dangerouslySetInnerHTML={{ __html: html }} />

      {/* jobs */}
      <h2><span role="img" aria-label="Hot jobs">🔥</span> Jobs</h2>
      <ul>
        <li><Link to="jobs/marketing-events-coordinator">Marketing &amp; Events Coordinator</Link></li>
        <li><Link to="jobs/office-coordinator">Office Coordinator</Link></li>
      </ul>

      {/* team */}
      <h2>The team</h2>
      <div css={teamWrapStyles}>
        <div css={avatarWrapStyles}>
          <span css={avatarStyles}>
            <img
              src={jerImg}
              alt="Jeremiah Trein"
            />
          </span>
          <div>
            <h3>Jeremiah</h3>
            <i>Managing Director</i>
          </div>
        </div>
        <div css={avatarWrapStyles}>
          <span css={avatarStyles}>
            <img
              src={adamImg}
              alt="Adam Tombleson"
            />
          </span>
          <div>
            <h3>Adam</h3>
            <i>Advisor</i>
          </div>
        </div>
        <div css={avatarWrapStyles}>
          <span css={avatarStyles}>
            <img
              src={pombaImg}
              alt="Pomba Magar"
            />
          </span>
          <div>
            <h3>Pomba</h3>
            <i>Advisor</i>
          </div>
        </div>
        <div css={avatarWrapStyles}>
          <span css={avatarStyles}>
            <img
              src={youImg}
              alt="An emoji representing you"
            />
          </span>
          <div>
            <h3>You?</h3>
            <i>Join us</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export const aboutQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

export default About;
