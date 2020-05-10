import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <h1>Contact</h1>
            <ul>
                <li><a href="https://twitter.com/tommypria">Twitter</a></li>
                <li><a href="https://linkedin.com/tommypriambodo">Linkedin</a></li>
                <li><a href="https://github.com/peron17">Github</a></li>
            </ul>
        </Layout>
    )
}

export default ContactPage
