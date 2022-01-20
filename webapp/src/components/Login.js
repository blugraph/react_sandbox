import {React,useState} from "react";
import { useNavigate } from "react-router";
import logoLoginImg from '../assets/images/logo_new.png'
import loginImg from '../assets/images/login.png'
import { useToggle } from "./ToggleContext";

export default function Login(props){
    let user = useToggle();
    const [showPassword,setShowPassword] = useState(false);
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
        if (!email|| !email.trim() || !regexEmail.test(email)) {
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
        user.setDateVal();navigate('/dashboard');
    }
    return(<>
        <nav className="navbar  navbar-expand-lg navbar-light" style={{backgroundColor: "#2699fb"}}>
            <a className="navbar-brand">
                <img src={logoLoginImg} alt="logo" className="d-inline-block align-text-middle" style={{paddingLeft:"2rem"}}/><strong style={{fontSize:"2em"}}> &nbsp;&nbsp;Sandbox</strong>
            </a>
        </nav>
        <div className="container-fluid" style={{overflow:"hidden"}}>
            <div className="row" style={{margin:"12rem 1rem"}}>
                <div className="col-md-6 d-none d-md-block">
                    <img src={loginImg} className="img-fluid" style={{minWidth: "400px",minHeight: "100%"}} />
                </div>
                <div className=" col-md-2"></div>
                <div className=" col-md-4 bg-white p-5 shadow-lg">
                    <div className="login__logo"><h2 className="logo__title">Sandbox</h2> </div>
                    <div className="form-style">
                        <form className="user" autoComplete="off">
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user login_input_field" onChange={(e) => { emailValidation(e) }}  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-user login_input_field" onChange={(e) => { setPassword(e.target.value); setErrorMsg(undefined) }} id="exampleInputPassword" placeholder="Password" />
                            </div>
                            <p style={{ visibility: (errorMsg) ? 'visible' : 'hidden', fontSize: "12px", fontWeight: "500", color: "red", textAlign: "left" }}>{errorMsg}</p>
                            <button type="button" className="main__blue__btn btn btn-primary btn-user btn-block" onClick={() => { loginSubmit() }}> Login </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}


