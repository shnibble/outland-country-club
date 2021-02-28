import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
    display: inline-block;
    position: relative;
    padding: 2px;
`
const StyledExternalLink = styled.a`
    text-align: center;
    text-decoration: none;
    color: #7289da;
    outline: none;

    &:focus + div, &:hover + div {
        width: 100%;
    }
`
const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: #7289da;
    outline: none;

    &:focus + div, &:hover + div {
        width: 100%;
    }
`
const Line = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0%;
    background: #7289da;
    transition: width .25s ease;
`

const FancyLink = ({ href='', to='', children }) => (
    <Container>
        {(href !== '')
        ?
        <StyledExternalLink href={href}>{children}</StyledExternalLink>
        :
        <StyledLink to={to}>{children}</StyledLink>
        }
        <Line />
    </Container>
)

export default FancyLink
