import React from 'react'
import styled from 'styled-components'
import Moment from 'moment'
import { StaticQuery } from 'gatsby'
import Section from './section'
import { FiExternalLink }  from 'react-icons/fi'
import FancyLink from './fancyLink'

const Title = styled.h2`
    text-align: center;
    font-size: 32px;
`
const Article = styled.article`
    background: #2c2f33;
    border-radius: 5px;
    margin: 25px 0;
    padding: 15px;
`
const ArticleTopic = styled.span`
    color: #999;
    font-size: 12px;
    padding-left: 5px;
`
const ArticleTitle = styled.h3`
    text-align: left;
    font-size: 24px;
    padding: 5px;
`
const ArticleDate = styled.span`
    color: #999;
    font-size: 12px;
    padding-left: 5px;
`
const ArticleBody = styled.div`
    padding: 5px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
`

const News = ({ link=false, condensed=false, limit=0 }) => {
    let count = 0;
    return (
        <StaticQuery
        query={graphql`
            query NewsQuery {
                allMarkdownRemark(filter: {frontmatter: {enabled: {eq: true}}, fileAbsolutePath: {regex: "/(news)/"}}, sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    id
                    frontmatter {
                    topic
                    title
                    date
                    }
                    rawMarkdownBody
                    excerpt
                }
                }
            }
        `}
        render={data => (
            <Section>
                <Title>NEWS</Title>
                {(data.allMarkdownRemark.nodes.map(news => {
                    if (limit && count < limit) {
                        count++
                    return (
                        <Article key={news.id}>
                            <ArticleTopic>{news.frontmatter.topic}</ArticleTopic>
                            <ArticleTitle>{news.frontmatter.title}</ArticleTitle>
                            <ArticleBody>{(condensed) ? news.excerpt : news.rawMarkdownBody}</ArticleBody>
                            <ArticleDate>{Moment(news.frontmatter.date).format('MMM Do, Y')}</ArticleDate>
                        </Article>        
                        )
                    } else {
                        return null
                    }
                }))}
                {(link) ? <LinkContainer><FancyLink to='/news'>more news <FiExternalLink /></FancyLink></LinkContainer> : null }
            </Section>
        )} />
    )
}

export default News
