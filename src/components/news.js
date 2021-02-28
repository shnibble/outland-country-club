import React from 'react'
import styled from 'styled-components'
import Moment from 'moment'
import { StaticQuery, Link } from 'gatsby'
import Section from './section'
import { FiExternalLink }  from 'react-icons/fi'
import FancyLink from './fancyLink'

const Title = styled.h2`
    text-align: center;
    font-size: 32px;
`
const Article = styled(Link)`
    display: block;
    background: #2c2f33;
    border-radius: 5px;
    margin: 25px 10px 25px 10px;
    padding: 15px;
    color: #f2f2f2;
    text-decoration: none;
    transition: all .25s ease;

    &:focus, &:hover {
        margin-left: 20px;
        margin-right: 0px;
        background: #3b3f44;
    }
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

const News = ({ link=false, limit=0 }) => {
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
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section>
                <Title>NEWS</Title>
                {(data.allMarkdownRemark.nodes.map(news => {
                    if ((limit && count < limit) || !limit) {
                        count++
                        return (
                            <Article key={news.id} to={`/news${news.fields.slug}`}>
                                <ArticleTopic>{news.frontmatter.topic}</ArticleTopic>
                                <ArticleTitle>{news.frontmatter.title}</ArticleTitle>
                                <ArticleBody>{news.excerpt}</ArticleBody>
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
