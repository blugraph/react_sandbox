import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumbs from "./Breadcrumbs";
import TableList from "./TableList";
import VerticalLayout from "./VerticalLayout/VerticalLayout";
export default function Dashboard(props) {
  return (
    <>
      <VerticalLayout />
      <div className="main-content">
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="Dashboards" breadcrumbItem="React Table v6" />
            <TableList />
          </Container>
        </div>
      </div>
    </>
  );
}
