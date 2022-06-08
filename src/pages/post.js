import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PostPage = () => (
  <Layout>
    <Seo title="Page post" />
    <h1>Hi from the post page</h1>
    <p>Welcome to page post</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PostPage
