import React from 'react'
import styled from 'styled-components'
import Section from './section'
import { BsFillPeopleFill } from 'react-icons/bs'
import LawfulgoodImg from '../images/lawfulgood.png'
import BartImg from '../images/bart.png'
import ShiohImg from '../images/shioh.png'
import AthenahImg from '../images/athenah.png'
import ZanthImg from '../images/zanth.png'
import NaniImg from '../images/nani.png'
import StifleImg from '../images/stifle.png'
import ShadeebaImg from '../images/shadeeba.png'
import ShockiiImg from '../images/shockii.png'


const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 34px;
    border-bottom: 2px solid #3b3f44;
    padding-bottom: 10px;
    margin-bottom: 25px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(90px, 1fr) );
`
const Officer = styled.div`
    min-width: 75px;
    max-width: 120px;
    margin: 15px;
`
const Image = styled.img`
    display: block;
    margin: auto;
    border-radius: 50%;
    width: 75px;
`
const Title = styled.h3`
    font-weight: bold;
    text-align: center;
    font-size: 24px;
`
const Position = styled.h4`
    text-align: center;
    font-size: 18px;
`

const Officers = () => (
    <Section>
        <Header>
            <h2>Guild Officers</h2>
            <BsFillPeopleFill /> 
        </Header>
        <Grid>
            <Officer>
                <Image src={LawfulgoodImg} />
                <Title>Lawfulgood</Title>
                <Position>Guild Master</Position>
            </Officer>
            <Officer>
                <Image src={BartImg} />
                <Title>Bart</Title>
                <Position>Guild Administrator</Position>
            </Officer>
            <Officer>
                <Image src={ShiohImg} />
                <Title>Shioh</Title>
                <Position>Guild Banker</Position>
            </Officer>
            <Officer>
                <Image src={AthenahImg} />
                <Title>Athenah</Title>
                <Position>Public Relations Officer</Position>
            </Officer>
            <Officer>
                <Image src={ZanthImg} />
                <Title>Zanth</Title>
                <Position>Tanks Officer</Position>
            </Officer>
            <Officer>
                <Image src={NaniImg} />
                <Title>Nani</Title>
                <Position>Healers Officer</Position>
            </Officer>
            <Officer>
                <Image src={StifleImg} />
                <Title>Stifle</Title>
                <Position>Fighters Officer</Position>
            </Officer>
            <Officer>
                <Image src={ShadeebaImg} />
                <Title>Shadeeba</Title>
                <Position>Casters Officer</Position>
            </Officer>
            <Officer>
                <Image src={ShockiiImg} />
                <Title>Shockii</Title>
                <Position>Casters Officer</Position>
            </Officer>
        </Grid>
    </Section>
)

export default Officers
