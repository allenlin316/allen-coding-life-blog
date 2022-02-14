import  * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import {jumbotron, title} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <div className={jumbotron}>
                <Container>
                    <h1 className={title}>My Awesome Life</h1>
                    <p>Never Give up on learning</p>
                </Container>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Allen's Coding Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col md={8}>
                        <h2>{pageTitle}</h2>
                        <p>{children}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Layout
