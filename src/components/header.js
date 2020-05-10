import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyle from "../theme/modules/header.module.scss"

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    
    return (
        <header className={headerStyle.header}>
            <h1>
                <Link className={headerStyle.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.active} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.active} to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.active} to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyle.navItem} activeClassName={headerStyle.active} to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
