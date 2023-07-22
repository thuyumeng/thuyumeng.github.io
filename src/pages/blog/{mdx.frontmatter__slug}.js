import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { MDXProvider } from '@mdx-js/react'
import "katex/dist/katex.min.css"


// customize the headers color
const H1 = props => <h1 style={{ color: '#4942E4' }} {...props} />
const H2 = props => <h2 style={{ color: '#4942E4' }} {...props} />
const H3 = props => <h3 style={{ color: '#4942E4' }} {...props} />

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
}

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost