import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../theme/style.scss"
import layoutStyle from "../theme/modules/layout.module.scss"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Layout = props => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container style={{ maxWidth:'750px' }}>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={layoutStyle.container}>
                <div className={layoutStyle.content}>
                    <Header />
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
