import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    margin: 25px auto;
    max-width: 900px;
    box-shadow: 0 2px 3px 1px rgba(0,0,0,0.25);
    background: #2c2f33;
    padding: 15px;
    border-radius: 5px;
`

const Section = ({ title, Icon, children }) => (
    <Container>
        {children}
    </Container>
)

export default Section
