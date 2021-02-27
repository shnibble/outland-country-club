import React from 'react'
import Hero from '../components/hero'
import Discord from '../components/discord'
import News from '../components/news'

const IndexPage = () => (
  <>
    <Hero />
    <Discord />
    <News condensed={true} limit={3} />
  </>
)

export default IndexPage