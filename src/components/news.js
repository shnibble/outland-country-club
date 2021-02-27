import React from 'react'
import styled from 'styled-components'
import Moment from 'moment'
import Section from './section'

const Title = styled.h2`
    text-align: center;
`
const Article = styled.article`
    background: #2c2f33;
    border-radius: 5px;
    margin: 25px 0;
    padding: 15px;
`
const ArticleTitle = styled.h3`
    text-align: left;
    font-size: 24px;
    padding: 5px;
`
const ArticleDate = styled.span`
    color: #999;
    font-size: 12px;
    padding-left: 10px;
`
const ArticleBody = styled.div`
    padding: 5px;
`

const News = ({ data }) => (
    <Section>
        <Title>NEWS</Title>
        {(data.allMarkdownRemark.nodes.map(news => 
        <Article key={news.id}>
            <ArticleTitle>{news.frontmatter.title}</ArticleTitle>
            <ArticleDate>{Moment(news.frontmatter.date).format('Y-M-D')}</ArticleDate>
            <ArticleBody>{news.rawMarkdownBody}</ArticleBody>
        </Article>        
        ))}
    </Section>
)

export default News
