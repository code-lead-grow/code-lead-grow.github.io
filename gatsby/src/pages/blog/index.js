import React from 'react';
import Link from 'gatsby-link';

import { FilterPostsByDate, FilterByPath, SortPostsByDate, TagExists, UnpackMarkdownEdges } from '../../utils';
import commonStyles from '../../styles/common.styles';

const styles = {
  blogInner: {
    display: `flex`,
    alignItems: `center`,
  },
  blogWrap: {
    display: `block`,
  },
  icon: {
    height: 48,
    width: 48,
    marginRight: 24,
  },
  li: {
    marginTop: 48,
    padding: 0,
  },
  ul: {
    listStyle: `none`,
  },
};

const BlogsList = ({ data }) => {
  const blogs = SortPostsByDate(FilterByPath(UnpackMarkdownEdges(data), 'blog'));
  return (
    <div>
      <header>
        <h1 css={{...commonStyles.h1, ...commonStyles.getHeaderStyles('1.5em') }}>
          Our Blog
        </h1>
      </header>
      <ul css={styles.ul}>
        {blogs.map(blog => (
          <li css={commonStyles.postListItem}>
            <div css={styles.blogWrap}>
              <Link to={blog.path} css={styles.blogInner}>
                {blog.date} &ndash; {blog.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsList;

export const query = graphql`
  query BlogsListQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
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
    }
  }
`
