import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const ListPosts = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <Seo title="List Posts" />
      <h1>List posts</h1>
      {nodes.map(e => (
        <div>
          <h2>{e.frontmatter.title}</h2>
          <p>{e.excerpt}</p>
          <Link to={e.fields.slug}>{e.frontmatter.title}</Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query getPosts {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          date(formatString: "DD MM YYYY")
          title
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;

export default ListPosts;
