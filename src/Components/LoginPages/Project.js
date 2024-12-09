import React, { useState } from 'react';

import './Project.css'

// bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// material ui
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom';

function Project(props) {

    // hamdle modal
    const [show, setShow] = useState(false);

    // handle form
    const [projectDetail, setProjectDetail] = useState({
        project: "",
        company: "",
        hr: "",
        manager: "",
        scrum: "",
        team: "",
        start: "",
        deadline: ""
    })

    // store list of card
    const [projectCard, setProjectCard] = useState([]);

    // handle modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // handle input changes
    const projectInput = (e) => {
        const { name, value } = e.target;
        setProjectDetail((prevProjectDetail) => ({
            ...prevProjectDetail,
            [name]: value
        }));
    };

    // handle form submit
    const projectSubmit = (e) => {
        e.preventDefault();
        console.log(projectDetail)

        // all fields are filled before submit
        const allFields = Object.values(projectDetail).every((field) => field);

        if (allFields) {

            console.log(projectDetail)
            // add new card
            setProjectCard([...projectCard, projectDetail]);

            // reset form fields
            setProjectDetail({
                project: "",
                company: "",
                hr: "",
                manager: "",
                scrum: "",
                team: "",
                start: "",
                deadline: ""
            });
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div>
            <div className='project-head'>
                <h3>Project Details</h3>
                <center>
                    <p></p>
                    <p></p>
                </center>
            </div>
            <div className='project-add'>
                {projectCard.length > 0 && (
                    <div className='project-card'>
                        {projectCard.map((card, index) => (
                            <div key={index} className='project-info'>
                                <div className='project-card-body'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Project :</th>
                                                <td>{card.project}</td>
                                            </tr>
                                            <tr>
                                                <th>HR :</th>
                                                <td>{card.hr}</td>
                                            </tr>
                                            <tr>
                                                <th>Scrum Master :</th>
                                                <td>{card.scrum}</td>
                                            </tr>
                                            <tr>
                                                <th>Start :</th>
                                                <td>{card.start}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='project-card-body'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Company :</th>
                                                <td>{card.company}</td>
                                            </tr>
                                            <tr>
                                                <th>Manager :</th>
                                                <td>{card.manager}</td>
                                            </tr>
                                            <tr>
                                                <th>Team Lead :</th>
                                                <td>{card.team}</td>
                                            </tr>
                                            <tr>
                                                <th>Deadline :</th>
                                                <td>{card.deadline}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='project-card-button'>
                                    <NavLink className="card-button">Edit</NavLink>
                                    <NavLink className="card-button">Delete</NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    <button onClick={handleShow}>
                        <AddIcon /> Add Project
                    </button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "rgb(71, 164, 246)" }}>Add Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='projet-detail'>
                        <form onSubmit={projectSubmit}>
                            <input type='text' placeholder='Project Name' name='project' value={projectDetail.project} onChange={projectInput} />
                            <input type='text' placeholder='Company Name' name='company' value={projectDetail.company} onChange={projectInput} />
                            <br />
                            <input type='text' placeholder='HR' name='hr' value={projectDetail.hr} onChange={projectInput} />
                            <input type='text' placeholder='Manager' name='manager' value={projectDetail.manager} onChange={projectInput} />
                            <br />
                            <input type='text' placeholder='Scrum Master' name='scrum' value={projectDetail.scrum} onChange={projectInput} />
                            <input type='text' placeholder='Team Lead' name='team' value={projectDetail.team} onChange={projectInput} />
                            <br />
                            <label>Start :</label>
                            <input type='date' name='start' value={projectDetail.start} onChange={projectInput} />
                            <label>Deadline :</label>
                            <input type='date' name='deadline' value={projectDetail.deadline} onChange={projectInput} />
                            <br />
                            <div className='project-button'>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancle
                                </Button>
                                <Button variant="success" onClick={handleClose} type='submit'>
                                    Save
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{ margin: "20px" }}></div>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Project;