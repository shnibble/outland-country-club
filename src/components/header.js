import React from 'react'
import styled from 'styled-components'

const Container = styled.header`

`
const Title = styled.h1`
    font-size: 48px;
    text-align: center;
    font-family: 'Poiret One', cursive;
    margin: 25px;
    font-weight: bold;
`

const Header = () => (
    <Container>
        <Title>Outland Country Club</Title>
    </Container>
)

export default Header
