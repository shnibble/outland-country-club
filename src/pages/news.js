import React from 'react'
import { Helmet } from 'react-helmet'
import News from '../components/news'

const NewsPage = () => (
    <>
        <Helmet>
            <title>Outland Country Club</title>
        </Helmet>
        <News link={false} condensed={false} limit={0} />
    </>
)

export default NewsPage
