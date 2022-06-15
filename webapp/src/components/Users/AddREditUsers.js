import React, { useState } from "react";
import BootstrapModal from "../Modal/BootstrapModal";
import { Form, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup'

export default function AddREditUsers(props) {
    const schema = props.isEdit ?
        yup.object().shape({
            name: yup.string().required('This field is mandatory'),
            username: yup.string().required('This field is mandatory'),
            email: yup.string().email().required('This field is mandatory'),
        })
        :
        yup.object().shape({
            name: yup.string().required('This field is mandatory'),
            username: yup.string().required('This field is mandatory'),
            email: yup.string().email().required('This field is mandatory'),
            // password: yup.string().required('This field is mandatory'),
        });

    const { projects } = []//useContext(ToggleContext)
    const [message, setMessage] = useState();
    const userrole = [];
    const formik = useFormik({
        validationSchema: schema,
        enableReintialize: true,
        initialValues: props.formValues,
        onSubmit: values => {
            if (props.isEdit) {
                // updateUser(values);
            } else {
                // createUser(values);
            }
        },
    });

    return (
        <BootstrapModal
            size='lg'
            heading={props.isEdit ? 'Edit ' : 'Add'}
            BtnDontshow={true}
            show={props.show}
            RemoveBtnshow={props.isEdit ? true : false}
            submitBtn={props.isEdit ? true : false}
            onHide={() => { props.handleClose(false); }}
        // submit={() => { formik.handleSubmit(); }}
        // onRemove={() => { formik.handleSubmit(); }}
        >
            <div className="sbp-preview">
                <div className="sbp-preview-content">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik01" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    placeholder='Name'
                                    type="text"
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    isValid={formik.touched.name && !formik.errors.name}
                                />
                                <Form.Text style={{ color: 'red' }}>{formik.errors.name && formik.touched.name && formik.errors.name}</Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationFormik01" >
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    placeholder='Username'
                                    type="text"
                                    name="username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                    isValid={formik.touched.username && !formik.errors.username}
                                />
                                <Form.Text style={{ color: 'red' }}>{formik.errors.username && formik.touched.username && formik.errors.username}</Form.Text>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik01" >
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    placeholder='Mobile'
                                    type="text"
                                    name="mobile"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobile}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationFormik01" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    placeholder='Email'
                                    type="text"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isValid={formik.touched.email && !formik.errors.email}
                                />
                                <Form.Text style={{ color: 'red' }}>{formik.errors.email && formik.touched.email && formik.errors.email}</Form.Text>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>User Role</Form.Label>
                                <Form.Select
                                    name="user_role"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.user_role} >
                                    {
                                        userrole && userrole.map(role =>
                                            <>
                                                <option value={role.value}>{role.label}</option>
                                            </>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Project</Form.Label>
                                <Form.Select
                                    name="project_id"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.project_id} >
                                    {
                                        projects && projects.map(x =>
                                            <>
                                                <option>select</option>
                                                <option value={x.projectid}>{x.projectid}</option>
                                            </>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        {/* {!props.isEdit && <Form.Group as={Col} controlId="validationFormik01" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    placeholder='Password'
                                    type="text"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    isValid={props.isEdit ? false : formik.touched.password && !formik.errors.password}
                                />
                                <Form.Text style={{ color: 'red' }}>{formik.errors.password && formik.touched.password && formik.errors.password}</Form.Text>
                            </Form.Group>} */}
                        <Form.Text style={{ color: 'red' }}>{message}</Form.Text>
                    </Form>
                </div>
            </div>
        </BootstrapModal>
    )
}