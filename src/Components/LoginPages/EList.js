import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './EList.css'

// BOOTSTRAP
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function EList(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div className="head-2">
                <h3>Employee List</h3>
                <center>
                    <p></p>
                    <p></p>
                </center>
            </div>
            <div>
                <table align='center' className='list-table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th style={{ width: "150px" }}>Registration No.</th>
                            <th style={{ width: "250px" }}>Name</th>
                            <th style={{ width: "250px" }}>Email Id</th>
                            <th style={{ width: "150px" }}>Mobile No.</th>
                            <th style={{ width: "150px" }}>Join Date</th>
                            <th style={{ width: "100px" }}>Status</th>
                            <th style={{ width: "100px" }}>View</th>
                            <th style={{ width: "120px" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2019101</td>
                            <td>Pratiksha Choudhary</td>
                            <td>pratikshac@gmail.com</td>
                            <td>9837651456</td>
                            <td>20-Jul-2019</td>
                            <td>Active</td>
                            <td>
                                <NavLink to={`./edetails`}>
                                    <i className="fa fa-eye"></i>
                                </NavLink></td>
                            <td>
                                <NavLink to={`./eregistration`}>
                                    <i className="fa fa-pencil"></i>
                                </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                <i className="fa fa-trash" onClick={handleShow}></i>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{color:"red"}}>Delete Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Are you sure you want to delete details?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancle
                                        </Button>
                                        <Button variant="danger" onClick={handleClose}>Delete</Button>
                                    </Modal.Footer>
                                </Modal>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2019102</td>
                            <td>Neeraj Malakar</td>
                            <td>malakarneeraj@gmail.com</td>
                            <td>8837210910</td>
                            <td>14-Sep-2019</td>
                            <td>Active</td>
                            <td><i className="fa fa-eye"></i></td>
                            <td><i className="fa fa-pencil"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <i className="fa fa-trash"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EList;