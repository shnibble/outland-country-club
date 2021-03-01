import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    grid-gap: 5px;
    max-width: 900px;
    margin: auto;
`
const StyledLink = styled(Link)`
    display: block;
    font-size: 20px;
    color: #7289da;
    text-decoration: none;
`

const Nav = () => (
    <Container>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/news'>News</StyledLink>
        <StyledLink to='/events'>Events</StyledLink>
        <StyledLink to='/members'>Members</StyledLink>
    </Container>
)
export default Nav
