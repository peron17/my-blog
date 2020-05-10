import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import footerStyle from '../theme/modules/footer.module.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <footer className={footerStyle.footer}>
            <p>
                &copy;2020 by <Link to="/">{data.site.siteMetadata.author}</Link>
            </p>
        </footer>
    )
}

export default Footer
