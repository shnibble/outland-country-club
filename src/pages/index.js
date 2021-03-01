import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Header from '../components/header'
import Discord from '../components/discord'
import News from '../components/news'

const IndexPage = () => (
  <>
    <Helmet>
      <title>Outland Country Club</title>
    </Helmet>
    <Hero />
    <Header />
    <Discord />
    <News link={true} limit={3} />
  </>
)

export default IndexPage