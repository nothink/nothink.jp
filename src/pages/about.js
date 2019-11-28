import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Aboutpage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <p>This page is About Page.</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Aboutpage
