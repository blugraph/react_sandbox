import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Dashboard from "./Dashboard";
import TableList from "./TableList";
import { ToggleContext,useToggle } from './ToggleContext';


export default function HeaderWithIcons(props) {
  const user = useToggle();
  // console.log('user',user)
  let pathName = window.location.pathname;
  let showHeaderIcons;
  switch (pathName) {
    case "/":
      showHeaderIcons = <DashBoardIcons />;
      break;
    case "/maps":
      showHeaderIcons = <MapContainerIcons />;
      break;
    case "/projects":
      showHeaderIcons = <ProjectIcons />;
      break;
    case "/settings":
      showHeaderIcons = "";
      break;
    default:
      break;
  }
  return showHeaderIcons
}

function DashBoardIcons(props) {
  const user = useToggle();
  return (<>
      <Form style={{display:"inline-flex",transform:'scale(1.2)'}}>
        {/* <i class="fas fa-map" style={{paddingTop: "0.2rem",paddingRight: "0.2rem"}}>map</i> */}
        <i style={{paddingRight: "0.2rem",color:user.toggleValue ?'grey':'blue'}}>map</i>
        <Form.Check
          custom
          type="switch"
          id="custom-switch"
          value={user.toggleValue}
          onChange={(e) => {
            user.setToggleVal(!user.toggleValue);
          }}
        />
        {/* <i class="fas fa-table" style={{paddingTop: "0.2rem",paddingRight: "0.2rem",marginLeft: "-0.3rem"}}>Table</i> */}
        <i style={{paddingRight: "0.2rem",marginLeft: "-0.3rem",color:!user.toggleValue ?'grey':'blue'}}>Table</i>
      </Form>
      </>
  );
}

function MapContainerIcons(props) {
  const user = useToggle();
  return (
  <>
      <Form style={{display:"inline-flex",transform:'scale(1.2)'}}>
        {/* <i class="fas fa-map" style={{paddingTop: "0.2rem",paddingRight: "0.2rem"}}>map</i> */}
        <i style={{paddingRight: "0.2rem",color:user.toggleValue ?'grey':'blue'}}>map</i>
        <Form.Check
          custom
          type="switch"
          id="custom-switch"
          value={user.toggleValue}
          onChange={(e) => {
            user.setToggleVal(!user.toggleValue);
          }}
        />
        {/* <i class="fas fa-table" style={{paddingTop: "0.2rem",paddingRight: "0.2rem",marginLeft: "-0.3rem"}}>Table</i> */}
        <i style={{paddingRight: "0.2rem",marginLeft: "-0.3rem",color:!user.toggleValue ?'grey':'blue'}}>Table</i>
      </Form>
      </>
  )
}

function ProjectIcons(props) {
  const user = useToggle();
  return (
    <>
      <Form style={{display:"inline-flex",transform:'scale(1.2)'}}>
        {/* <i class="fas fa-map" style={{paddingTop: "0.2rem",paddingRight: "0.2rem"}}>map</i> */}
        <i style={{paddingRight: "0.2rem",color:user.toggleValue ?'grey':'blue'}}>Chart</i>
        <Form.Check
          custom
          type="switch"
          id="custom-switch"
          value={user.toggleValue}
          onChange={(e) => {
            user.setToggleVal(!user.toggleValue);
          }}
        />
        {/* <i class="fas fa-table" style={{paddingTop: "0.2rem",paddingRight: "0.2rem",marginLeft: "-0.3rem"}}>Table</i> */}
        <i style={{paddingRight: "0.2rem",marginLeft: "-0.3rem",color:!user.toggleValue ?'grey':'blue'}}>Table</i>
      </Form>
      </>
  )
}
