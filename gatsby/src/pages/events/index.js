import React from 'react';
import Link from 'gatsby-link';
import Media from 'react-media';

import { FilterPostsByDate, FilterByPath, SortPostsByDate, TagExists, UnpackMarkdownEdges } from '../../utils'
import TagIcon from '../../components/TagIcon'
import commonStyles from '../../styles/common.styles';

const EventsList = ({ data }) => {
  const events = FilterPostsByDate(SortPostsByDate(FilterByPath(UnpackMarkdownEdges(data), 'event/')))
  return (
    <Media query="screen and (max-width: 700px)">
      {isSmallScreen => (
        <div>
          <div style={commonStyles.wrap(isSmallScreen)}>
            <div style={commonStyles.box(isSmallScreen)}>
              <h2>Experts 👩🏽‍🏫 Conferences</h2>
              <p>
                Hi, 👋🏽 and welcome! It's great you're interested in our <i>Experts Conferences</i>. We are still developing this
                new project, but when we launch we know the conferences will refresh you and provide new knowledge and skills you've been waiting for.
              </p>

              <p>
                If you want to know more about the conferences, help us, or want to be considered as one of our experts,
                please email us: <a href="mailto:hello@codeleadgrow.com?subject=Experts Conference Inquiry">hello@codeleadgrow.com</a>.
              </p>

              <hr style={{ border: 'thin dashed #DDD' }} />

              {/* conferences */}
              <header>
                <h2 css={{ ...commonStyles.getHeaderStyles('1.5em') }}>
                  Upcoming conferences
                </h2>
              </header>
            </div>

            <div style={commonStyles.box(isSmallScreen)}>
              <h2>Lightning ⚡️ Workshops</h2>
              <p>
                These are one-day, small (10-20 people only) workshops. They move quickly and provide new skills to developers
                who want to keep learning. We do not recommend these events for new developers, unless the workshop is marked as "Beginner".
              </p>

              <hr style={{ border: 'thin dashed #DDD' }} />

              {/* events */}
              <header>
                <h2 css={{ ...commonStyles.getHeaderStyles('1.5em') }}>
                  Upcoming workshops
                </h2>
              </header>
              <ul css={styles.ul}>
                {events.map(event => (
                  <TagIcon tags={event.tags} render={(iconList, icon) => (
                    <li css={commonStyles.postListItem}>
                      <div css={styles.eventWrap}>
                        <Link to={event.path} css={styles.eventInner}>
                          <img css={styles.icon} src={icon} alt={`${event.tags[0]} logo`} />
                          {event.date || 'date TBD'} @ {event.time || 'time TBD'}
                          <br />
                          {event.title}
                        </Link>
                      </div>
                    </li>
                  )} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Media>
  );
};

export default EventsList;

const styles = {
  eventInner: {
    display: `flex`,
    alignItems: `center`,
  },
  eventWrap: {
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
}

export const query = graphql`
  query EventsListQuery {
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
