import { Col, Row } from "react-bootstrap";

export default function Breadcrumbs(props) {
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-0 font-size-18">{props.breadcrumbItem}</h4>
          <div className="page-title-right">
          </div>
        </div>
      </Col>
    </Row>
  );
}
