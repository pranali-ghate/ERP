import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';


// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Material UI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';

// CSS
import './MainPage.css'

function MainPage(props) {

    // for offcanvas
    const [show, setShow] = useState(false);

    const handleCloseOff = () => setShow(false);
    const handleShow = () => setShow(true);

    // for profile
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClosePro = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Navbar className="nav-bar">
                <Container>
                    <Nav className='nav-link'>
                        <button onClick={handleShow}>
                            Livelife
                            <i className="fa-solid fa-leaf"></i>
                        </button>
                        <NavLink to='loginhome' className="home-link">Home</NavLink>
                        <NavLink to='project' className="home-link">Project</NavLink>
                        <NavLink to='task' className="home-link">Task</NavLink>
                    </Nav>
                    <AccountCircleIcon className='profile-img' onClick={handleClick} />
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClosePro}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className='menu-details'>
                        <table className='menu-picname'>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: "center" }}><AccountCircleIcon className='profile-pic' /></td>
                                    <td className='profile-name'>
                                        <p>User Name</p>
                                        <p>useremail@gmail.com</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='hr-line' />
                        <div className='menu-button'>
                            <NavLink to='profile' className='button-link' onClick={handleClosePro}>Profile</NavLink>
                            <NavLink to='setting' className='button-link' onClick={handleClosePro}>Setting</NavLink>
                            <NavLink to='/'><button>Log Out</button></NavLink>
                        </div>
                    </div>
                </Menu>
            </Navbar>
            <Offcanvas show={show} onHide={handleCloseOff} className='off-canvas'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ color: "rgb(71, 164, 246)", textAlign: "center" }}>
                        Livelife
                        <i className="fa-solid fa-leaf"></i>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='ul-list'>
                    <NavLink to='eregistration' className='list' onClick={handleCloseOff}>Employee Registration</NavLink>
                    <NavLink to='elist' className='list' onClick={handleCloseOff}>Employee List</NavLink>
                    <NavLink to='eresignation' className='list' onClick={handleCloseOff}>Resignation</NavLink>
                </Offcanvas.Body>
            </Offcanvas>
            <Outlet />
            {/* <div>
                <p>task list</p>
                <p>message</p>
            </div> */}
        </div>
    );
}

export default MainPage;