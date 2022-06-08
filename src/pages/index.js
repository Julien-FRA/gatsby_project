import * as React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const links = [
  {
    text: 'Blog',
    url: '/blog',
    description:
      'A great place to see my first blog. Its only a test to teach how to use gatsby.',
  },
];

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a className={styles.listItemLink} href={`${link.url}`}>
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
