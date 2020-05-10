import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li>
                            <h3 style={{ marginBottom: "4px" }}>
                                {edge.node.frontmatter.title}
                            </h3>
                            <small>{edge.node.frontmatter.date}</small>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
