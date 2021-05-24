import React from 'react'
import Seo from '../components/seo'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Nav from '../components/nav'
import Officers from '../components/officers'

const OfficersPage = () => (
    <>
        <Seo title="Officers" />
        <Header />
        <Nav />
        <Wrapper>
            <Officers />
        </Wrapper>
    </>
)

export default OfficersPage
