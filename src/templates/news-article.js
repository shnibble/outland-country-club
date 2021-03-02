import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Moment from 'moment'
import Header from '../components/header'
import Nav from '../components/nav'
import { graphql } from 'gatsby'

const Container = styled.article`
    max-width: 900px;
    margin: auto;
    padding: 15px;
`
const Title = styled.h1`
    font-size: 32px;
    padding: 15px;
    margin: 5px 0;
`
const ArticleHeader = styled.div`
    padding: 15px;
    color: #999;
`
const Date = styled.span`

`
const Topic = styled.span`

`
const Body = styled.div`
    padding: 15px;
    background: #2c2f33;
    border-radius: 5px;

    & p {
        padding: 5px;
    }

    & li {
        margin-left: 25px;
        padding: 5px;
    }
`

const NewsArticle = ({ data }) => {
    const article = data.markdownRemark
    return (
        <>
            <Helmet>
                <title>Outland Country Club</title>
            </Helmet>
            <Header />
            <Nav />
            <Container>
                <Title>{article.frontmatter.title}</Title>
                <ArticleHeader>
                    <Date>{Moment(article.frontmatter.date).format('MMM Do, Y')}</Date> | <Topic>{article.frontmatter.topic}</Topic>
                </ArticleHeader>
                <Body dangerouslySetInnerHTML={{ __html: article.html }} />
            </Container>
        </>
    )
}

export default NewsArticle

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        topic
      }
    }
  }
`
