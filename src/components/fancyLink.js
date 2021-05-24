import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled(Link)`
    position: relative;
    color: #4d94ff;
    text-decoration: none;
    font-weight: bold;
    transition: color .25s ease;

    &:focus, &:hover {
        color: #80b3ff;
    }

    &:focus > div:nth-child(1), &:hover > div:nth-child(1) {
        width: 100%;
    }
`
const Line = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #80b3ff;
    transition: width .25s ease;
`

const FancyLink = ({ to, children }) => (
    <Container to={to}>
        <Line />
        {children}
    </Container>
)

export default FancyLink
