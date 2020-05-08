import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello World</h1>
            <p>Make world better with smile</p>
            <p>
                Need developer <Link to="/contact">Contact me</Link>
            </p>
            <p>
                <Link to="/about">About me</Link>
            </p>
        </Layout>
    )
}

export default IndexPage
