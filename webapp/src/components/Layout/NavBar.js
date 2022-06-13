import React, { useState, useEffect } from "react"
import { Container, Form, Navbar, NavDropdown, Offcanvas, Nav, FormControl, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom"
import { useToggle } from "../ToggleContext";
import logo from "../../assets/images/New_bg_logo.png";

export default function NavBar(props) {
    const [menu, setMenu] = useState(false)
    const [username, setusername] = useState("Admin")
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();
    let user = useToggle();

    const handleClose = () => setShowSearch(false);
    const handleShow = () => setShowSearch(true);

    return (
        <>
            {/* {[false, 'sm', 'md', 'md', 'md', 'xmd'].map((expand) => ( */}
            <Navbar key='md' bg="light" collapseOnSelect expand="auto" className="mb-3 p-0" sticky="top" >
                <Container fluid>

                    <Navbar.Brand>
                        <img src={logo} alt="" style={{ width: "140px", height: "70px" }} />
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} style={{ border: "none" }} />
                    </Navbar.Brand>
                    <Row>
                        <Col>
                            <NavDropdown title={username} id={`offcanvasNavbarDropdown-expand-md`} >
                                <NavDropdown.Item href="/profile"><i className="align-middle me-1 "></i> Profile </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/" onClick={() => { user.setDateVal(); navigate('/login'); localStorage.clear(); }} style={{ color: "red" }}><i className="align-middle me-1 text-danger"></i>Logout </NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                        <Col>
                            <Button variant="outline-secondary" onClick={handleShow}><i className="fa fa-search" aria-hidden="true"></i></Button>
                        </Col>
                    </Row>


                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                <img src={logo} alt="" style={{ width: "140px", height: "70px" }} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1">
                                <NavLink style={{ textDecoration: 'none' }} to={'/home'} className='nav-link'> <i className="fa fa-house-chimney"></i>&nbsp;&nbsp;&nbsp;Home</NavLink>
                                <NavLink style={{ textDecoration: 'none' }} to={'/dashboard'} className='nav-link'> <i className="fa fa-object-group" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Stations</NavLink>
                                <NavLink style={{ textDecoration: 'none' }} to={'/tables'}    className='nav-link'> &nbsp;&nbsp;&nbsp;Projects </NavLink>
                                <NavLink style={{ textDecoration: 'none' }} to={'/users'} className='nav-link'> &nbsp;&nbsp;&nbsp;Users List</NavLink>
                                <NavLink style={{ textDecoration: 'none' }} to={'/dashboard'} className='nav-link'> &nbsp;&nbsp;&nbsp;Subscribers</NavLink>
                                <Navbar.Collapse>
                                    <Nav className="NavBarCls">
                                        <NavDropdown title={
                                            <div className="sidenav-collapse-arrow"><i className="fa fa-lock-keyhole"></i>&nbsp;&nbsp;&nbsp;Administration <i className="fa fa-angle-right floatRt"></i></div>} menuVariant="light" >
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/* Search Drawer */}
            <Offcanvas show={showSearch} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search Stations</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
            {/* Search Drawer */}

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