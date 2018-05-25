const nodePath = require('path');
const { UnpackMarkdownEdges } = require('./src/utils');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const eventTemplate = nodePath.resolve(`src/templates/event.js`);
  const blogTemplate = nodePath.resolve(`src/templates/blog.js`);
  const pageTemplate = nodePath.resolve(`src/templates/page.js`);

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
            component
          }
        }
      }
    }
  }`)
    .then(({ data, errors }) => {
      if (errors) {
        return Promise.reject(errors);
      }

      const getTemplate = (component) => {
        try { return nodePath.resolve(component) } catch(e) { return pageTemplate }
      };

      const posts = UnpackMarkdownEdges(data);

      posts.forEach(({ component, path }) => {
        if (testPath('event/', path)) {
          createPage({
            path,
            component: eventTemplate,
          });
          return;
        }

        if (testPath('blog/', path)) {
          createPage({
            path,
            component: blogTemplate,
          });
          return;
        }

        createPage({
          path,
          component: getTemplate(component),
        });
      });
    });
};

const testPath = (match, path) => {
  const regex = RegExp(match);
  return regex.test(path);
};
