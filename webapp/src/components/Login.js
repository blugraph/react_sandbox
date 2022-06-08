import { React, useState } from "react";
import { useNavigate } from "react-router";
import logoLoginImg from '../assets/images/logo_new.png'
import loginImg from '../assets/images/login.png'
import { useToggle } from "./ToggleContext";
import { Container, Form, Navbar, NavDropdown, Offcanvas, Nav, FormControl, Button, Row, Col, Card } from "react-bootstrap";

export default function Login(props) {
    let user = useToggle();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [password, setPassword] = useState();
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = (e) => {
        // if (!e.target.value || !e.target.value.trim() || !regexEmail.test(e.target.value)) {
        //     setErrorMsg('Email is Invalid')
        // } else { 
        setEmail(e.target.value); setErrorMsg(undefined)
        // }
    }
    let navigate = useNavigate();
    const forgotPassword = () => { navigate('/forgotPassword') }
    const loginSubmit = (e) => {
        if (!email || !email.trim() || !regexEmail.test(email)) {
            setErrorMsg('Email is Invalid')
        } else if (email === undefined && password === undefined) {
            setErrorMsg("Please Enter the Valid Credential to Login")
        } else if (email !== undefined && password === undefined) {
            setErrorMsg("Please Enter the Password")
        } else { setErrorMsg(undefined); login(); }
    }
    const login = () => {
        let request = { email: email, password: password }
        localStorage.setItem('isloggedIn', true);
        user.setDateVal(); navigate('/dashboard');
    }
    return (<>
        <Navbar key='md' expand='md' className="mb-3" style={{ backgroundColor: "#2699fb" }}>
            <Container fluid>
                <Navbar.Brand href="#"><img src={logoLoginImg} alt="" height="70" /><strong style={{ fontSize: "2em" }}>&nbsp;&nbsp;Blugraph</strong></Navbar.Brand>
            </Container>
        </Navbar>
        <div className="container-fluid" >
            <Row>
                <Col sm={8} className="d-none d-md-block"><img src={loginImg} className="img-fluid" /></Col>
                <Col sm={4} className="shadow-lg p-5">
                    <Card.Body>
                        <Card.Title><h2>Sandbox</h2></Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => { emailValidation(e) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); setErrorMsg(undefined) }} />
                            </Form.Group>
                            <p style={{ visibility: (errorMsg) ? 'visible' : 'hidden', fontSize: "12px", fontWeight: "500", color: "red", textAlign: "left" }}>{errorMsg}</p>
                            <Button variant="primary" type="submit" onClick={() => { loginSubmit() }}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
        </div>
    </>
    )
}


