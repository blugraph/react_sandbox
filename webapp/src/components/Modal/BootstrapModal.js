import React from "react";
import { Col, Modal, Button } from 'react-bootstrap';

export default function BootstrapModal(props) {
    return (
        <>
            <Modal show={props.show}
                onHide={props.onHide}  
                size={props.size}
                aria-labelledby="contained-modal-title-vcenter"
                centered {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> {props.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}