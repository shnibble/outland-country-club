import React from 'react'
import styled from 'styled-components'
import Section from './section'
import FancyLink from './fancyLink'
import { CgHello } from 'react-icons/cg'

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 34px;
    border-bottom: 2px solid #3b3f44;
    padding-bottom: 10px;
    margin-bottom: 25px;
`
const Paragraph = styled.p`
    font-size: 18px;
    margin-bottom: 25px;
    text-align: left;
`

const Recruitment = () => (
    <Section>
        <Header>
            <h2>Introduction</h2>
            <CgHello /> 
        </Header>
        <Paragraph>The Outland Country Club is a PvE / RP guild playing progressive classic World of Warcraft on the realm Deviate Delight.</Paragraph>
        <Paragraph>We are a friendy and relatively casual guild focused on relationships, good times, shared experiences, shared food creations, and fun banter in and out of game.</Paragraph>
        <Paragraph>Meme players, elitists, snobs, and unfriendly people are not welcome in our guild and will be found out and removed expeditiously.</Paragraph>
        <Paragraph>Raiding is a part of our guild and we participate in it as much as we possibly can. We are a casual guild but that does not mean we slack off during raids. Raiding should be taken seriously and all participants are expected to pull their own weight for the benefit and enjoyment of themselves and others.</Paragraph>
        <Paragraph>Feel free to read our <FancyLink to='/charter'>Charter</FancyLink> for more details.</Paragraph>
    </Section>
)

export default Recruitment
