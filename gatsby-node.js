const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    });
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/posts.js`),
      context: { slug: slug },
    });
  });

  actions.createPage({
    path: '/blog',
    component: require.resolve(`./src/templates/list-posts.js`),
    context: {},
  });
};
