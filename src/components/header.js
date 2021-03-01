import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
    max-width: 900px;
    margin: auto;
`
const Title = styled.h1`
    font-family: "Seaweed Script";
    font-weight: normal;
    text-align: center;
    font-size: 50px;
`

const Header = () => (
    <Container>
        <Title>Outland Country Club</Title>
    </Container>
)
export default Header
