import React from 'react'
import Seo from '../components/seo'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Nav from '../components/nav'
import Schedule from '../components/schedule'

const SchedulePage = () => (
    <>
        <Seo title="Schedule" />
        <Header />
        <Nav />
        <Wrapper>
            <Schedule />
        </Wrapper>
    </>
)

export default SchedulePage
