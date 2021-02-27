import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    max-width: 900px;
    margin: 0 auto 50px auto;
    padding: 25px;
`

const Section = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Section
