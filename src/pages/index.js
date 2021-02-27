import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import Discord from '../components/discord'
import News from '../components/news'

const IndexPage = ({ data }) => (
  <>
    <Hero />
    <Discord />
    <News data={data} />
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query  {
    allMarkdownRemark(filter: {frontmatter: {enabled: {eq: true}}, fileAbsolutePath: {regex: "/(news)/"}}) {
      nodes {
        id
        frontmatter {
          enabled
          title
          date
        }
        rawMarkdownBody
      }
    }
  }
`
