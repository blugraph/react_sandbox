
import {  NavLink } from "react-router-dom"
import { config } from '@fortawesome/fontawesome-svg-core';
import { faGear, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar() {

    return (
        <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
                <div className="nav accordion" id="accordionSidenav">
                    <div className="sidenav-menu-heading"></div>
                    <NavLink style={{ textDecoration: 'none' }} to={'/'} className='nav-link' onClick={() => { document.body.classList.toggle("sidenav-toggled"); }}><div className="nav-link-icon"><FontAwesomeIcon icon={faHome} /></div>Home</NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to={'/settings'} className='nav-link' onClick={() => { document.body.classList.toggle("sidenav-toggled"); }}><div className="nav-link-icon"><FontAwesomeIcon icon={faGear} /></div>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}


export default Sidebar