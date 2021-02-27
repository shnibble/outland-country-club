import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    margin-bottom: 50px;
    padding: 25px;
`

const Section = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Section
