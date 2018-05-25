import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import commonStyles from '../styles/common.styles';
import SellActions from '../components/SellActions';

const Template = ({ data, location }) => {
  const { markdownRemark: { frontmatter, html } } = data
  const { title, subtitle, date } = frontmatter
  return (
    <div>
      <Helmet title={`${title} - Code Lead Grow`} />

      <div>
        <header>
          <h1 css={{ ...commonStyles.h1Post, ...commonStyles.getHeaderStyles('1.5em') }}>{title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <hr />

        <SellActions showHeader />
      </div>
    </div>
  )
}

export const blogPageQuery = graphql`
  query BlogByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        time
        path
        tags
        excerpt
      }
    }
  }
`;

export default Template;
