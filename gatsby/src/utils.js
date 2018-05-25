function UnpackMarkdownEdges({ allMarkdownRemark: { edges } }) {
  return edges.reduce((acc, next) => {
    const { node: { frontmatter } } = next
    acc.push(frontmatter)
    return acc
  }, []);
}

function UnpackMarkdownNode({ markdownRemark: { html, frontmatter } }) {
  return { html, ...frontmatter };
}

function FilterByPath(posts, testPath) {
  return posts.filter((post) => {
    const { path } = post
    if (RegExp(`${testPath}`).test(path)) return post
  });
}

function SortPostsByDate(posts, direction = 'ASC') {
  return posts.map(e => e).sort((a, b) => {
    const postA = a.date
    const postB = b.date

    switch (direction) {
      case 'ASC':
        return new Date(postA) - new Date(postB)
      case 'DESC':
        return new Date(postB) - new Date(postA)
      default:
        return new Date(postA) - new Date(postB)
    }
  });
}

function FilterPostsByDate(posts, timeline, timeStamp = new Date().toDateString()) {
  return posts.filter(({ date }) => {
    switch (timeline) {
      // future; exclusive of timestamp
      case 'AFTER':
        return new Date(timeStamp) < new Date(date)
      // archive; exclusive of timestamp
      case 'BEFORE':
        return new Date(timeStamp) > new Date(date)
      // current + future; inclusive of timestamp
      default:
        return new Date(timeStamp) <= new Date(date)
    }
  });
}

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function ShadeRGBColor(color, percent) {
  const f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
  return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}

module.exports = {
  FilterByPath,
  FilterPostsByDate,
  ShadeRGBColor,
  SortPostsByDate,
  UnpackMarkdownEdges,
  UnpackMarkdownNode,
};
