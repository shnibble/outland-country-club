import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
    text-decoration: none;
    background: #f1f1f1;
    color: #3b3f44;
    margin: 50px;
    flex: 1;

    &:hover {
        background: #3b3f44;
        color: #f1f1f1;
    }
`

const NavButton = ({to, text}) => {
    return <StyledLink to={to} activeStyle={{color: "#f1f1f1", background: "#7289da"}}>{text}</StyledLink>
}

export default NavButton