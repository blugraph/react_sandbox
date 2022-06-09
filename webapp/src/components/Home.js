import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import TableList from "./TableList";

export default function Home(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <header className="page-header pt-4" >
                <Container className="px-4">
                    <Row className="justify-content-between">
                        <Col className="mt-4">
                            <h1 className="page-header-title textAign_Left d-flex">
                                <div className="page-header-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-activity">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>Dashboard </h1>
                            <div className="page-header-subtitle">Example dashboard overview and content summary</div>
                        </Col>
                        <Col className="mt-4"> <Calender /> </Col>
                    </Row>
                </Container>
            </header>
            <RowCards />
            <Table />
        </>
    )
}


function Calender(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <Row>
            <Col style={{ maxWidth: "min-content" }}>
                <label><strong>Start Date: </strong></label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        var utc = date.toUTCString();
                        setStartDate(date);
                        setEndDate(new Date(date.getTime() + 1000 * 60 * 60 * 24));
                    }}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy-MM-dd HH:mm"  //Format the date
                    showTimeInput
                    placeholderText="start date"
                    minDate={new Date()}
                />
            </Col>
            {/* <Col><i className="far fa-arrow-alt-circle-right"></i></Col> */}
            <Col style={{ maxWidth: "min-content" }}>
                <label><strong>End Date: </strong></label>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => { setEndDate(date); }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    showTimeInput
                    dateFormat="yyyy-MM-dd HH:mm" //Format the date
                    fixedHeight
                />
            </Col>
        </Row>
    )
}

function RowCards(props) {
    return (
        <Container className="mt-n10">
            <Row>
                <Col xxl={4} xl={12} className="mb-4">
                    <Card className="h-100">
                        <Card.Body className="h-100 p-0">
                            <Card.Title>Smart Solutions for Connected Living</Card.Title>
                            <p className="text-gray-700 mb-0 p-5">
                                At BluGraph we build solutions for the Cities of Tomorrow. We sense and transform vital information, provide meaningful insights, manage resources and provide time-critical events to various agencies and stakeholders.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} className="mb-4">
                    <Card className="h-100 mb-4" >
                        <Card.Body className="h-100 p-0">
                            <Card.Title>Infrastructure on Cloud</Card.Title>
                            <p className="text-gray-700 mb-0 p-5">
                                Stateless, Serverless
                                Scale with Ease
                                Provisioning at Scale
                                Secure by Design
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} className="mb-4">
                    <Card className="h-100 mb-4">
                        <Card.Body className="h-100 p-0">
                            <Card.Title>Edge Computing</Card.Title>
                            <p className="text-gray-700 mb-0 p-5">
                                Secure Nodes
                                Low power RTUs
                                Universal Sensing
                                AI at Edge
                                Cellular/NBIoT, LoRa connectivity
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

function Table(props) {
    return (
        <Container>
            <Card className="h-100">
                <Card.Body className="h-100 p-0">
                    <Card.Title>Smart Management </Card.Title>
                    <TableList />
                </Card.Body>
            </Card>
        </Container>
    )
}