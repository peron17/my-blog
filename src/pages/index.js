import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
    return (
        <Layout>
            <SEO />
            <h1>Hello.</h1>
            <h3>I'm Tommypria, a full-stack developer from Jakarta, Indonesia</h3>
            <p>
                Need developer? <Link to="/contact">Contact me</Link>
            </p>
        </Layout>
    )
}

export default IndexPage
