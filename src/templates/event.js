import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import commonStyles from '../styles/common.styles'
import SellActions from '../components/SellActions';

const Template = ({ data, location }) => {
  const { markdownRemark: { frontmatter, html } } = data
  const { subtitle, title, titleshort, date } = frontmatter
  return (
    <div>
      <Helmet title={`${title} - Code Lead Grow`} />

      <div>
        <header>
          <h1 css={{ ...commonStyles.h1Post, ...commonStyles.getHeaderStyles('1.5em') }}>{titleshort || title}</h1>
        </header>
        {/* parsed markdown */}
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <hr />

        <SellActions showHeader />
      </div>
    </div>
  )
}

export const eventPageQuery = graphql`
  query EventByPath($path: String!) {
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
`

export default Template
