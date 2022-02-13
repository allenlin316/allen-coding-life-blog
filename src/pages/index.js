// Step 1: Import React
import * as React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import {Navbar, Nav, Container} from 'react-bootstrap'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>This is home page</p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage