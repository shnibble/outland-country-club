import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Nav from '../components/nav'

const MembersPage = ({ data }) => (
  <>
    <Helmet>
      <title>Outland Country Club</title>
    </Helmet>
    <Header />
    <Nav />
    <ul>
        {(data.allMarkdownRemark.nodes.map(member => 
        <li key={member.id}>
            <div>
                <h3 className={`class-${member.frontmatter.class}`}>{member.frontmatter.name}</h3>
                <span>{member.frontmatter.race} {member.frontmatter.class}</span>
                <div><Img fluid={member.frontmatter.picture.childImageSharp.fluid} /></div>
            </div>
        </li>
        ))}
    </ul>
  </>
)

export default MembersPage

export const pageQuery = graphql`
  query  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(members)/"}}) {
      nodes {
        id
        frontmatter {
          enabled
          name
          race
          class
          officer
          officer_title
          picture {
            childImageSharp {
              fluid (maxWidth: 350, quality: 90) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`
