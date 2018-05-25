import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import commonStyles from '../styles/common.styles';

const Template = ({ data }) => {
  const { markdownRemark: { frontmatter, html } } = data
  const { title } = frontmatter
  return (
    <div>
      <Helmet title={`${title} - Code Lead Grow`} />

      <div>
        <header>
          <h1 css={{...commonStyles.h1, ...commonStyles.getHeaderStyles('1.5em') }}>{title}</h1>
        </header>
        {/* parsed markdown */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        excerpt
      }
    }
  }
`

export default Template;
