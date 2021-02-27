import React from 'react'
import styled from 'styled-components'
import Section from './section'

const Container = styled.div`
    background: #2c2f33;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
`
const TitleBlock = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`
const Title = styled.h2`
    text-align: center;
    font-size: 32px;
`
const Link = styled.a`
    display: block;
    text-align: center;
    color: #7289da;
    font-weight: bold;
    font-size: 16px;
    margin: 10px auto;
`

const Discord = () => (
    <Section>
        <Container>
            <TitleBlock>
                <Title>JOIN OUR DISCORD</Title>
                <Link href='https://discord.gg/X4fgbYJfpG'>https://discord.gg/X4fgbYJfpG</Link>
            </TitleBlock>
            <iframe src="https://discord.com/widget?id=813281725601415199&theme=dark" width="100%" height="250px" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title='Discord Widget'></iframe>
        </Container>
    </Section>
)

export default Discord
