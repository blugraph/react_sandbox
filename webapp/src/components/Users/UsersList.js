import React, { useState } from "react";
import ReactV6Table from "../ReactV6Table";
import jsonData from "../../data.json"
import { Col, Container, Form, FormControl, Row, Button } from "react-bootstrap";
import AddREditUsers from './AddREditUsers'

export default function UsersList(props) {
    const [search, setSearch] = useState();
    const [checked, setChecked] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '', username: '', password: '', email: '', user_role: '', project_id: '', mobile: ''
    })
    const columns = [
        {
            Header: '',
            width: 50,
            id: "ActionItems",
            accessor: props =>
                <input
                    type="checkbox"
                    id={`custom-checkbox-${props.sub}`}
                    checked={props.sub === checked ? true : false}
                    onChange={(e) => { setChecked(props.sub);/*setIsEdit(true); setModalShow(true); getSingleUser(props); setChecked(props.sub)*/ }}
                />
        },
        {
            Header: "First Name",
            id: "First Name",
            accessor: data => data.firstName,
            Cell: props => <span>{props.value ? props.value : ''}</span>
        },
        {
            Header: "Last Name",
            id: "Last Name",
            accessor: data => data.lastName,
            Cell: props => <span>{props.value ? props.value : ''}</span>
        },
        {
            Header: "Age",
            id: "Age",
            accessor: data => data.age,
            Cell: props => <span>{props.value ? props.value : ''}</span>
        },
        {
            Header: "Visits",
            id: "visits",
            accessor: data => data.visits,
            Cell: props => <span>{props.value ? props.value : ''}</span>
        },
        {
            Header: "Status",
            id: "Status",
            accessor: data => data.status,
            Cell: props => <span>{props.value ? props.value : ''}</span>
        },
        {
            Header: "Profile",
            id: "Profile",
            accessor: data => data.progress,
            Cell: props => <span>{props.value ? props.value : ''}</span>
        },
    ]

    const sortedList = () => {
        if (search) {
            return jsonData?.filter(i => { return i.firstName.toString().toUpperCase().includes(search.toString().toUpperCase()) })
        } else {
            return jsonData
        }
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <header className="p-3 h2">Users List</header>
            <Row className="p-3">
                <Col>
                    <Form>
                        <Button onClick={handleShow}> Add User</Button>
                        <FormControl type="search" placeholder="Search" className="me-2 searchClass" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
                    </Form>
                </Col>
            </Row>
            <ReactV6Table list={sortedList()} columns={columns} className="p-5" />
            {show &&
                <AddREditUsers show={show} handleClose={handleClose} handleShow={handleShow}
                    formValues={formValues} setFormValues={setFormValues}
                />}
        </Container>
    )
}