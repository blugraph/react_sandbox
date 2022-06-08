import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { Dropdown} from "react-bootstrap"
import { withRouter, Link ,useNavigate} from "react-router-dom"
// users
import user1 from "../assets/images/avatar-1.jpg"
import { useToggle } from "./ToggleContext"

export default function ProfileMenu (props){
  const [menu, setMenu] = useState(false)
  const [username, setusername] = useState("Admin")
  const navigate = useNavigate();
  let user = useToggle();

  return (
    <>
      <Dropdown isopen={menu.toString()} onClick={() => setMenu(!menu)} className="d-inline-block"  >
        <Dropdown.Toggle className="btn header-item " id="page-header-user-dropdown" tag="button" style={{color:"#fff",background:"#fff",borderColor:"#fff"}}>
          <img className="rounded-circle header-profile-user" src={user1} alt="Header Avatar"/>
          <span className="d-none d-xl-inline-block ms-2 me-1" style={{color:"#5d6375"}}>{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block"/>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-start">
          {/* <i className="fas fa-wrench align-middle me-1">Settings</i> */}
          <Dropdown.Item tag="a" href="/profile"> <i className="align-middle me-1 ">Profile</i> </Dropdown.Item>
          {/* <Dropdown.Item > <i className="align-middle me-1"> Settings</i> </Dropdown.Item> */}
          <div className="dropdown-divider"/>
          <Link to="/" className="dropdown-item" onClick={()=>{user.setDateVal();navigate('/login'); localStorage.clear();}}>
            <i className="align-middle me-1 text-danger">Logout</i>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}