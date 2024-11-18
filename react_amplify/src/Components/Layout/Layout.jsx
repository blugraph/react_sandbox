import { useEffect } from "react";
import { Container } from "react-bootstrap";
import {  Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"
import Sidebar from "./Sidebar";
import Home from "../../Pages/Home";
export default function Layout() {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    useEffect(() => {
        if (sidebarToggle) {
            //document.body.classList.toggle("sidenav-toggled");
            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sidenav-toggled'));
            });
        }
    }, [sidebarToggle])
    return (
        
            <Container fluid className="p-0">
                <div className="nav-fixed">
                    <NavBar/>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                         <Sidebar/>
                        </div>
                        <div id="layoutSidenav_content" >
                            <Routes>
                            <Route path="/" element={<Home/>} />
                            
                            </Routes>
                            {/*<Footer />*/}
                        </div>
                    </div>
                </div>
            </Container>
       
    )
}
