import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 15px;
`

const Wrapper = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Wrapper
