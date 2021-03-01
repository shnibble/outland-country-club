import React from 'react'
import styled from 'styled-components'
import Section from './section'
import { FiExternalLink }  from 'react-icons/fi'
import FancyLink from './fancyLink'
import { graphql } from 'gatsby'
import { StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Title = styled.h2`
    text-align: center;
    font-size: 32px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
`
const MemberDisplay = styled.div`
`
const MemberAvatar = styled.div`
    display: inline-block;
    background: #2c2f33;
    margin: 25px 10px 25px 10px;
    padding: 15px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const AvatarName = styled.div`
`

const Members = ({ data }) => (
    <Section>
        <Title>Meet Our Club!</Title>

        <StaticQuery 
            query={graphql`
                query MembersQuery {
                    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(members)/"}}) {
                        nodes {
                            id
                            frontmatter {
                                enabled
                                name
                                class
                                picture {
                                    childImageSharp {
                                      fluid (maxWidth: 500) {
                                        ...GatsbyImageSharpFluid_noBase64
                                      }
                                    }
                                  }
                            }
                        }
                    }
                }
            `}

            render={data => (
                <MemberDisplay>
                    {(data.allMarkdownRemark.nodes.map(member => {
                        //
                        return <MemberAvatar>
                            <Img fluid={member.frontmatter.picture.childImageSharp.fluid} className="rounded-circle"/>
                            <AvatarName>{member.frontmatter.name}</AvatarName>
                        </MemberAvatar>
                    }))}
                </MemberDisplay>
            )} 
        />

        <LinkContainer><FancyLink to='/members'> Meet All <FiExternalLink /></FancyLink></LinkContainer>
    </Section>
)

export default Members