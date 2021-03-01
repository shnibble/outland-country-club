import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Discord from '../components/discord'
import Members from '../components/members'
import News from '../components/news'

const IndexPage = () => (
  <>
    <Helmet>
      <title>Outland Country Club</title>
    </Helmet>
    <Hero />
    <Discord />
    <News link={true} limit={3} />
    <Members />
  </>
)

export default IndexPage