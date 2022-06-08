import {React,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_new.png";
import HeaderWithIcons from "../HeaderWithIcons";
import ProfileMenu from "../ProfileMenu";

export default function Header(props) {
  const [search, setsearch] = useState(false);

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box d-lg-none d-md-block">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm"><img src={logo} alt="" height="22" /></span>
            </Link>
          </div>
          <button type="button" onClick={() => { props.tToggle(); }} className="btn btn-sm px-3 font-size-16 header-item " id="vertical-menu-btn"><i className="fa fa-fw fa-bars" /></button>
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input type="text" className="form-control" placeholder="Search"/>
              <span className="bx bx-search-alt" />
            </div>
          </form>
        </div>
        <div className="d-flex">
          {/* <HeaderWithIcons {...props}/> */}
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button onClick={() => { setsearch(!search);  }} type="button" className="btn header-item noti-icon "id="page-header-search-dropdown" >
              <i className="fa fa-search" style={{fontSize:"inherit"}}/>
            </button>
            <div className={search ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show" : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"} aria-labelledby="page-header-search-dropdown" >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ProfileMenu/>
        </div>
      </div>
    </header>
  );
}
