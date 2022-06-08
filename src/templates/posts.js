import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Posts = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <div>
        {post.frontmatter.img && (
          <Img fluid={post.frontmatter.img.childImageSharp.fluid} />
        )}
      </div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Posts;
