import React from 'react'
import styled from 'styled-components'
import Section from './section'
import FancyLink from './fancyLink'
import { AiOutlineCopy } from 'react-icons/ai'

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
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const DiscordLink = styled.span`
    font-size: 18px;
`
const CopyButton = styled.button`
    position: relative;
    background: none;
    border: none;
    outline: none;
    color: #7289da;
    cursor: pointer;
    height: 30px;
    width: 30px;
    margin-left: 5px;
`
const Popout = styled.div`
    display: none;
    position: absolute;
    top: 10px;
    left: 10px;
    background: #fff;
    color: #000;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #000;
    pointer-events: none;
`

const Discord = () => {
    const copyLink = () => {
        navigator.clipboard.writeText('https://discord.gg/X4fgbYJfpG')
        document.getElementById('discord_link').disabled = true
        document.getElementById('discord_link_popout').style.display = 'inline-block'
        setTimeout(() => {
            document.getElementById('discord_link').disabled = false
            document.getElementById('discord_link_popout').style.display = 'none'
        }, 1000);
    }

    return (
        <Section>
            <Container>
                <TitleBlock>
                    <Title>JOIN OUR DISCORD</Title>
                    <LinkContainer>
                        <FancyLink href='https://discord.gg/X4fgbYJfpG'><DiscordLink>https://discord.gg/X4fgbYJfpG</DiscordLink></FancyLink>
                        <CopyButton id='discord_link' onClick={copyLink} title='Copy Link'><AiOutlineCopy size={20} /><Popout id='discord_link_popout'>Copied!</Popout></CopyButton>
                    </LinkContainer>
                </TitleBlock>
                <iframe src="https://discord.com/widget?id=813281725601415199&theme=dark" width="100%" height="250px" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title='Discord Widget'></iframe>
            </Container>
        </Section>
    )
}

export default Discord
