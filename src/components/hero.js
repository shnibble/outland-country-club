import React from 'react'
import styled from 'styled-components'
import FancyLink from './fancyLink'




const Container = styled.div`
    height: 500px;
    background: #ccc;
`

const Hero = () => (
    <Container>
        <div>hero image goes here. truff tested her presence here too.</div>
		<FancyLink to='/members'>Meet our members</FancyLink>
    </Container>
)

export default Hero
