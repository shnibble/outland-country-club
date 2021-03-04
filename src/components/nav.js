import React from 'react'
import styled from 'styled-components'
import NavButton from './NavButton'
import logo from '../../content/assets/logo.png'

const Container = styled.nav`
    position: sticky;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    grid-gap: 10px;
    width: 100%;
    margin: 10px;
    padding: 10px;
    top: 0px;
    z-index: 100;
    background: #23272a;
`

const Nav = () => {
    return (
        <Container>
            <NavButton to='/' text='Home' />
            <NavButton to='/news' text='News'/>
            <a href="/"><img src={logo} height="100px"/></a>
            <NavButton to='/events' text='Events'/>
            <NavButton to='/members' text='Members'/>
        </Container>
    )
}

export default Nav
