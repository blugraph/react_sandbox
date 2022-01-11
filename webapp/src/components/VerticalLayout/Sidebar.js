import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_new.png";
import logoBg from "../../assets/images/bg_full.jpeg";

export default function Sidebar(props) {
  return (
    <div className="vertical-menu">
      <div className="navbar-brand-box">
        <Link to="/" className="logo logo-light">
          <span className="logo-sm">
            <img src={logo} alt="" height="22" />
          </span>
          <span className="logo-lg">
            <img src={logoBg} alt="" height="55" />
          </span>
        </Link>
      </div>
      <div id="sidebar-menu">
        {/* <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/#" className="">
              <i className="fas fa-home"></i>
              <span>Dashboards</span>
            </Link>
          </li>

          <li>
          <Link to="/#">
            <i className="fas fa-people-arrows"></i>
            <span>Projects</span></Link>
          </li>
          <li>
          <Link to="/#">
            <i className="fas fa-map-marked-alt"></i>
            <span>Map</span></Link>
          </li>
          <li>
          <Link to="/#">
            <i className="fas fa-user-shield"></i>
            <span>Administrator</span></Link>
          </li>
          <li></li>
        </ul> */}
         <Nav activeKey="1" className="flex-column sidebarNavLink">
          <Nav.Item style={{lineHeight:"3rem",paddingLeft:"0.9rem"}}> <i className="fas fa-home"></i> <span>Dashboards</span></Nav.Item>
          <Nav.Item style={{lineHeight:"3rem",paddingLeft:"0.9rem"}}> <i className="fas fa-people-arrows"></i><span>&nbsp;Projects </span></Nav.Item>
          <Nav.Item style={{lineHeight:"3rem",paddingLeft:"0.9rem"}}> <i className="fas fa-map-marked-alt"></i><span>&nbsp;Map</span> </Nav.Item>
          <Nav.Item style={{lineHeight:"3rem",paddingLeft:"0.9rem"}}> <i className="fas fa-cog"></i><span>&nbsp;Settings</span> </Nav.Item>
          <NavDropdown title={<><i className='fas fa-user-shield'></i><span>Administrator</span></> } id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
         </Nav>
      </div>
    </div>
  );
}
