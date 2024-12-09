import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Profile.css';

// Material UI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';

// BOOTSTRAP
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Profile(props) {

    // accordiom
    const [activeContent, setActiveContent] = useState('profile-details');

    // conform update password
    const [conformPass, setConformPass] = useState(false);

    const closeConform = () => setConformPass(false);
    const showConform = () => {
        setConformPass(true);

        setTimeout(()=>{
            closeConform();
        },3000);
    };

    // delete account and change password
    const [show, setShow] = useState(false);

    const handleClose2 = () => setShow(false);
    const handleShow = () => setShow(true);

    // reset profile picture
    const [anchorEl, setAnchorEl] = useState(null);

    // reset profile picture
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl(null);
    };

    // accordiom
    const buttonClick = (contentId) => {
        setActiveContent(contentId);
    };

    return (
        <div>
            <div className='profile'>
                <div className='profile-left'>
                    <div className='profile-top'>
                        <AccountCircleIcon className='profile-image' onClick={handleClick} />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose1}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            className='profile-menu'
                        >
                            <div className='profile-item'>
                                <NavLink onClick={handleClose1} className='profile-edit'>Edit</NavLink>
                                <NavLink onClick={handleClose1} className='profile-edit'>Remove</NavLink>
                            </div>
                        </Menu>
                    </div>
                    <div className='profile-name'>
                        <p>User name</p>
                        <p>useremail@gmail.com</p>
                    </div>
                    <div className='profile-points'>
                        <p className={`acc-button ${activeContent === 'profile-details' ? 'active' : ''}`} onClick={() => buttonClick('profile-details')}>Profile Details</p>
                        <p className={`acc-button ${activeContent === 'admin-details' ? 'active' : ''}`} onClick={() => buttonClick('admin-details')}>Admin Address</p>
                        <p className={`acc-button ${activeContent === 'reset-password' ? 'active' : ''}`} onClick={() => buttonClick('reset-password')}>Reset Password</p>
                        <p className={`acc-button ${activeContent === 'delete-account' ? 'active' : ''}`} onClick={() => buttonClick('delete-account')}>Delete Account</p>
                    </div>
                </div>
                <div className='profile-right'>
                    {activeContent === 'profile-details' && (
                        <div className='profile-details' id='profile-details'>
                            <p className='profile-head'>Profile Details</p>
                            <div className='details-list'>
                                <div>First Name :</div>
                                <div>Muskan</div>
                            </div>
                            <div className='details-list'>
                                <div>Last Name :</div>
                                <div>Yadav</div>
                            </div>
                            <div className='details-list'>
                                <div>Mobile :</div>
                                <div>8876399810</div>
                            </div>
                            <div className='details-list'>
                                <div>Email :</div>
                                <div>muskan.yadav@gmail.com</div>
                            </div>
                            <div className='details-list'>
                                <div>Department :</div>
                                <div>IT</div>
                            </div>
                            <div className='details-list'>
                                <div>Position :</div>
                                <div>Full-stack developer</div>
                            </div>
                        </div>
                    )}
                    {activeContent === 'admin-details' && (
                        <div className='admin-details'>
                            <p className='profile-head'>Admin Address</p>
                            <div className='admin-list'>
                                <div>Address :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div className='admin-list'>
                                <div>Pin Code :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div className='admin-list'>
                                <div>City :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div className='admin-list'>
                                <div>State :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div className='admin-list'>
                                <div>Country :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div>
                                <button>Update Address</button>
                            </div>
                        </div>
                    )}
                    {activeContent === 'reset-password' && (
                        <div className='reset-password'>
                            <p className='profile-head'>Reset Password</p>
                            <div className='reset-list'>
                                <div>Current Password :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div className='reset-list'>
                                <div>New Password :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div className='reset-list'>
                                <div>Confirm Password :</div>
                                <div><input type='text' /></div>
                            </div>
                            <div>
                                <button onClick={handleShow}>Update Password</button>
                            </div>
                            <Modal
                                show={show}
                                onHide={handleClose2}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ color: "rgb(71, 164, 246)" }}>Enter OTP</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <center><input className='input-otp' type='text'/></center>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        Cancle
                                    </Button>
                                    <Button variant="success" onClick={() => {showConform(); handleClose2();}}>Update</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal
                                show={conformPass}
                                onHide={closeConform}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                    <center><p style={{color:"green", fontSize:"larger", fontWeight:"500", margin:"20px auto"}}>Password Update Successfully</p></center>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )}
                    {activeContent === 'delete-account' && (
                        <div className='delete-account'>
                            <p className='profile-head'>Delete Account</p>
                            <div className='delete-card'>
                                <label>Enter your password</label>
                                <br />
                                <input type='text' />
                                <div className='delete-buttons'>
                                    <button>Cancle</button>
                                    <button onClick={handleShow}>Delete</button>
                                </div>
                                <Modal
                                    show={show}
                                    onHide={handleClose2}
                                    backdrop="static"
                                    keyboard={false}
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{ color: "red" }}>Delete Account</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Are you sure you want to delete account?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose2}>
                                            Cancle
                                        </Button>
                                        <Button variant="danger" onClick={handleClose2}>Delete</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;