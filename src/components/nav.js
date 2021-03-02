import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
`

const Nav = () => {
    return (
        <Container>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/news'>News</StyledLink>
            <StyledLink to='/events'>Events</StyledLink>
            <StyledLink to='/members'>Members</StyledLink>
        </Container>
    )
}

export default Nav
