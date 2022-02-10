import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle="My Coding Blogs">
            <p>My cool blog posts would go here</p>
            <ul>
                {
                    data.allFile.nodes.map((blogName) =>
                        <li key={blogName.name}>{blogName.name}</li>
                    )
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage