import React, { useState, useEffect } from "react"
import { Container, Form, Navbar, NavDropdown, Offcanvas, Nav, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import { useToggle } from "../ToggleContext";
import logo from "../../assets/images/New_bg_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavBar(props) {
    const [menu, setMenu] = useState(false)
    const [username, setusername] = useState("Admin")
    const navigate = useNavigate();
    let user = useToggle();

    return (
        <>
            {/* {[false, 'sm', 'md', 'md', 'md', 'xmd'].map((expand) => ( */}
            <Navbar key='md' bg="light" collapseOnSelect expand="auto" className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} alt="" height="100" />
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <NavDropdown title={username} id={`offcanvasNavbarDropdown-expand-md`} >
                        {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
                        <NavDropdown.Item href="/profile"><i className="align-middle me-1 ">Profile</i>  </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={() => { user.setDateVal(); navigate('/login'); localStorage.clear(); }}><i className="align-middle me-1 text-danger">Logout</i> </NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}><img src={logo} alt="" height="100" /></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1">
                                <Nav.Link href="/tables">Home</Nav.Link>
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <NavDropdown title={username} id={`offcanvasNavbarDropdown-expand-md`} >
                                    {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
                                    <NavDropdown.Item href="/profile"><i className="align-middle me-1 ">Profile</i>  </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/" onClick={() => { user.setDateVal(); navigate('/login'); localStorage.clear(); }}><i className="align-middle me-1 text-danger">Logout</i> </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action1" style={{ visibility: "hidden" }}>Home</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/* <Navbar collapseOnSelect expand="mauto" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    Dice Roller
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            {/* ))} */}
        </ >
    )
}