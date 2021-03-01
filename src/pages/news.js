import React from 'react'
import { Helmet } from 'react-helmet'
import News from '../components/news'
import Header from '../components/header'
import Nav from '../components/nav'

const NewsPage = () => (
    <>
        <Helmet>
            <title>Outland Country Club</title>
        </Helmet>
        <Header />
        <Nav />
        <News link={false} condensed={false} limit={0} />
    </>
)

export default NewsPage
