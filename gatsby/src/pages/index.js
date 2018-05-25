import React from 'react';
import Link from 'gatsby-link';
import Media from 'react-media';

import SellActions from '../components/SellActions';
import { FilterByPath, FilterPostsByDate, SortPostsByDate, UnpackMarkdownEdges } from '../utils';

const styles = {
  getStarted: {
    background: `#fdc486`,
    boxShadow: `7px 7px 2px #f1f1f1`,
    color: `black`,
    padding: `12px 24px`,
    borderRadius: 4,
  },
  h2: { fontSize: '22px' },
  h3: {
    fontSize: '24px',
    fontFamily: `Nunito, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
  },
  homeBox(isSmallScreen) {
    return {
      flex: 1,
      padding: '0 12px 24px',
    };
  },
  link: { color: `#ea4268` },
  postsWrap: {
    margin: `148px 0 48px 0`,
    textAlign: `center`,
    borderTop: `1px dashed #d6d6d6`,
  },
  trainingSellWrap: {
    textAlign: `center`,
  },
  wrap(isSmallScreen) {
    return {
      display: `flex`,
      flexDirection: isSmallScreen ? `column` : `row`,
    };
  },
};

const defaultPost = (type) => ({
  title: '',
  path: null,
  date: null,
  excerpt: `No ${type}. Please check back later.`,
});

const IndexPage = ({ data }) => {
  const posts = UnpackMarkdownEdges(data);
  const postsByDateAsc = SortPostsByDate(posts);
  const events = FilterPostsByDate(FilterByPath(postsByDateAsc, 'event/'));
  const blogPosts = FilterByPath(postsByDateAsc, 'blog/');
  const {
    title: eventTitle,
    path: eventPath,
    date: eventDate,
    excerpt:  eventExcerpt,
  } = events[0] || defaultPost('events');

  const {
    title: blogTitle,
    path: blogPath,
    date: blogDate,
    excerpt: blogExcerpt,
  } = blogPosts[blogPosts.length - 1] || defaultPost('blog posts');

  return (
    <div>
      <Media query="screen and (max-width: 700px)">
        {matches => (
          <div>
            {/* text */}
            <div css={styles.trainingSellWrap}>
              <h2>Time to update yourself.</h2>
              <p><b>Learn to be a better developer, with us.</b></p>

              <SellActions />

            </div>

            <div css={{ ...styles.wrap(matches), ...styles.postsWrap }}>
              {/* event */}
              <div css={styles.homeBox(matches)}>
                <h2 css={styles.h2}>Next event</h2>
                {eventPath &&
                  <h3 css={styles.h3}>
                    <Link css={styles.link} to={eventPath}>
                      {eventTitle}
                    </Link>
                  </h3>
                }
              </div>

              {/* blog */}
              <div css={styles.homeBox(matches)}>
                <h2 css={styles.h2}>Latest from our blog</h2>
                {blogPath &&
                  <h3 css={styles.h3}>
                    <Link css={styles.link} to={blogPath}>
                      {blogTitle}
                    </Link>
                  </h3>
                }
              </div>
            </div>
          </div>
        )}
      </Media>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`;
