import React from 'react'
import styled from 'styled-components'
import FancyLink from './fancyLink'

const Container = styled.nav`

`
const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 20px;
`
const Item = styled.li`
    font-size: 24px;
`

const Nav = () => (
    <Container>
        <List>
            <Item>
                <FancyLink to='/'>Home</FancyLink>
            </Item>
            <Item>
                <FancyLink to='/charter'>Charter</FancyLink>
            </Item>
            <Item>
                <FancyLink to='/schedule'>Schedule</FancyLink>
            </Item>
            <Item>
                <FancyLink to='/officers'>Officers</FancyLink>
            </Item>
        </List>
    </Container>
)

export default Nav
