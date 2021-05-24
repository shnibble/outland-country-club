import React from 'react'
import Seo from '../components/seo'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Nav from '../components/nav'
import Charter from '../components/charter'

const CharterPage = () => (
    <>
        <Seo title="Charter" />
        <Header />
        <Nav />
        <Wrapper>
            <Charter />
        </Wrapper>
    </>
)

export default CharterPage
