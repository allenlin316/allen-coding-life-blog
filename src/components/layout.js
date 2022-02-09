import  * as React from 'react'
import { Link } from "gatsby"
import { 
    container,
    navLink,
    navItem
} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLink}>
                    <li className={navItem}><Link to="/">Home</Link></li>
                    <li className={navItem}><Link to="../about">About</Link></li>
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
