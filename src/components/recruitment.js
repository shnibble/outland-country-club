import React from 'react'
import styled from 'styled-components'
import Section from './section'
import FancyLink from './fancyLink'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import DruidIcon from '../images/druid.png'
import HunterIcon from '../images/hunter.png'
import MageIcon from '../images/mage.png'
import PaladinIcon from '../images/paladin.png'
import PriestIcon from '../images/priest.png'
import RogueIcon from '../images/rogue.png'
import ShamanIcon from '../images/shaman.png'
import WarlockIcon from '../images/warlock.png'
import WarriorIcon from '../images/warrior.png'

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
    text-align: center;
`
const Grid = styled.div`
    max-width: 200px;
    margin: auto;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    padding: 5px;
`
const ClassIcon = styled.img`
    width: 100%;
    max-width: 60px;
`

const Recruitment = () => (
    <Section>
        <Header>
            <h2>Recruitment</h2>
            <BsFillPersonPlusFill /> 
        </Header>
        <Paragraph>OCC is currently recruiting all classes and roles!</Paragraph>
        <Grid>
            <ClassIcon src={DruidIcon}/>
            <ClassIcon src={HunterIcon}/>
            <ClassIcon src={MageIcon}/>
            <ClassIcon src={PaladinIcon}/>
            <ClassIcon src={PriestIcon}/>
            <ClassIcon src={RogueIcon}/>
            <ClassIcon src={ShamanIcon}/>
            <ClassIcon src={WarlockIcon}/>
            <ClassIcon src={WarriorIcon}/>
        </Grid>
        <Paragraph>Contact an <FancyLink to='/officers'>officer</FancyLink> in Discord or in-game for details.</Paragraph>
    </Section>
)

export default Recruitment
