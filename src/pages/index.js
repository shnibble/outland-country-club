import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

const Container = styled.div`
  background: #000;
  color: #fff;
`
const Title = styled.h1`
  font-size: 32px;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
  padding: 5px;
`
const StyledLink = styled(Link)`
  color: #fff;
  background: #f88000;
  padding: 15px;
  border-radius: 2px;
  text-decoration: none;
`

const IndexPage = ({ data }) => (
  <Container>
    <Title>Outland Country Club</Title>
    <Nav>
      <StyledLink to='/members'>Meet the Club</StyledLink>
    </Nav>
    <p>Site under construction!</p>
    <div>
      <h2>News</h2>
      <ul>
        {(data.allMarkdownRemark.nodes.map(news => 
        <li key={news.id}>
          <div>
            <h3>{news.frontmatter.title}</h3>
            <div>{news.rawMarkdownBody}</div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  </Container>
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
