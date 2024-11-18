import { Container, Navbar, Button, Row, Col } from "react-bootstrap";
import {  NavLink } from "react-router-dom"
import { config } from '@fortawesome/fontawesome-svg-core';
import { faUser,faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../assets/img/blusim_logo.png";
config.autoAddCss = false
export default function NavBar() {
   
    return (
        <>
            <Navbar key='md' bg="light" collapseOnSelect expand="auto" className="shadow" sticky="top" >
                <Container fluid className="containerFluidHt">
                    <Navbar.Brand className="border-0 headerHeight">
                        <NavLink style={{ textDecoration: 'none' }} to='/' >
                        <img alt="Logo" style={{ height:'60px' }} src={logo} />
                        </NavLink>
                        <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle" > <FontAwesomeIcon icon={faBars} /></button>
                    </Navbar.Brand>
                    <Row className="border-0 headerHeight">
                        <Col className="p-1">

                        </Col>
                        <Col className="p-1">
                            
                        </Col>
                        <Col className="p-0 mt-2">
                            <p className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon={faUser} />
                            </p>
                            <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                                <h5 className="dropdown-header d-flex align-items-center">
                                    <div className="dropdown-user-details">
                                        <div className="dropdown-user-details-email">user</div>
                                    </div>
                                </h5>
                                <div className="dropdown-divider"></div>
                                
                                <div className="dropdown-divider"></div>
                                <p className=" dropdown-item ">
                                    <Button variant='outline' className="text-danger" >Logout</Button>
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Navbar>


        </ >
    )
}