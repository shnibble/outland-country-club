import React from 'react'
import Seo from '../components/seo'
import Wrapper from '../components/wrapper'
import Hero from '../components/hero'
import Header from '../components/header'
import Nav from '../components/nav'
import Introduction from '../components/introduction'
import Recruitment from '../components/recruitment'
import Discord from '../components/discord'

const IndexPage = () => (
    <>
        <Seo title="Home" />
        <Hero />
        <Header />
        <Nav />
        <Wrapper>
            <Introduction />
            <Recruitment />
            <Discord />
        </Wrapper>
    </>
)

export default IndexPage
