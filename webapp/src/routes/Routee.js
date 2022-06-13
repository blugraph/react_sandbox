import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router"
import Login from "../components/Login";
import Layout from "../components/Layout/Layout";
import { ToggleContext } from "../components/ToggleContext";
import Dashboard from "../components/Dashboard";
import { Container } from "react-bootstrap";
import Home from "../components/Home";
import UsersList from "../components/Users/UsersList";

export default function Routee(props) {
    const [date, setDate] = useState();
    const [toggleValue, setToggleValue] = useState(false);
    const setToggleVal = (data) => {
        setToggleValue(data);
    };
    const setDateVal = () => {
        setDate(new Date());
    };
    const isloggedIn = localStorage.getItem("isloggedIn");
    console.log('isloggedIn ',isloggedIn)
    return (
        <>
            {isloggedIn ?
                <BrowserRouter>
                    <ToggleContext.Provider
                        value={{
                            toggleValue: toggleValue,
                            setToggleVal: setToggleVal,
                            setDateVal: setDateVal,
                        }}
                        toggleValue={toggleValue}
                        setToggleVal={setToggleVal}
                    >
                        <Layout />
                        <div className="main-content">
                            <div className="page-content">
                                <Container fluid>
                                    <Routes>
                                        <Route path="/home" element={<Home />} />
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/users" element={<UsersList />} />
                                        <Route path="/login" element={<Navigate replace to={'/home'} />} />
                                    </Routes>
                                </Container>
                            </div>
                        </div>
                    </ToggleContext.Provider>
                </BrowserRouter>
                :
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="*" element={<Navigate replace to={'/login'} />} />
                    </Routes>
                </BrowserRouter>
            }
        </>
    )
}