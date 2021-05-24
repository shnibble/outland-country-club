import React from 'react'
import styled from 'styled-components'
import Section from './section'
import { BiCalendarAlt } from 'react-icons/bi'

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 34px;
    border-bottom: 2px solid #3b3f44;
    padding-bottom: 10px;
    margin-bottom: 25px;
`
const Title = styled.h3`
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 10px;
    text-align: left;
`
const Paragraph = styled.p`
    font-size: 18px;
    margin-bottom: 25px;
    text-align: left;
`
const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Event = styled.div`
    background: #99aab5;
    color: #fff;
    margin: 25px;
    padding: 25px;
    border-radius: 5px;
`

const Schedule = () => (
    <Section>
        <Header>
            <h2>Raid Schedule</h2>
            <BiCalendarAlt /> 
        </Header>
        <Paragraph>OCC will phase in our raid groups/plans in stages as players level up and get attuned to Karazhan.</Paragraph>

        <Title>Stage 1</Title>
        <hr />
        <Paragraph>OCC will begin hosting three groups throughout the week starting on June 2nd to run dungeons and attunements.</Paragraph>

        <EventsContainer>
            <Event>Mondays 7:50pm - 11:00pm server time (EST): dungeon/attunement runs open to all.</Event>
            <Event>Wednesdays 7:50pm - 11:00pm server time (EST): dungeon/attunement runs open to all.</Event>
            <Event>Fridays 8:50pm - midnight server time (EST): dungeon/attunement runs open to all.</Event>
        </EventsContainer>

        <Title>Stage 2</Title>
        <hr />
        <Paragraph>When we have enough guild members attuned to Karazhan we'll change the weekly dungeon groups into 10-person raid groups.</Paragraph>
        <EventsContainer>
            <Event>Mondays 7:50pm - 11:00pm server time (EST): Karazhan, guildies get priority.</Event>
            <Event>Wednesdays 7:50pm - 11:00pm server time (EST): Karazhan, guildies get priority.</Event>
            <Event>Fridays 8:50pm - midnight server time (EST): Karazhan, guildies get priority.</Event>
        </EventsContainer>

        <Title>Stage 3</Title>
        <hr />
        <Paragraph>After a few rounds of Karazhan and when we have enough gear we'll change again.</Paragraph>
        <EventsContainer>
            <Event>Mondays 7:50pm - 11:00pm server time (EST): Gruul's Lair / Magtheridon's Lair, guildies only.</Event>
            <Event>Wednesdays 7:50pm - 11:00pm server time (EST): Karazhan, guildies get priority.</Event>
            <Event>Fridays 8:50pm - midnight server time (EST): Karazhan, guildies get priority.</Event>
        </EventsContainer>
    </Section>
)

export default Schedule
