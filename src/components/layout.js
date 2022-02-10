import  * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { 
    container,
    header,
    navLink,
    navItem
} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql
        `query {
        site {
          siteMetadata {
            title
          }
        }
      }`)
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <header className={header}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLink}>
                    <li className={navItem}><Link to="/">Home</Link></li>
                    <li className={navItem}><Link to="../about">About</Link></li>
                    <li className={navItem}><Link to='/blog'>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
