import React from 'react';

import './EDetails.css';

// Material UI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function EDetails(props) {
    return (
        <div>
            <div className="head-4">
                <h3>Employee Details</h3>
                <center>
                    <p></p>
                    <p></p>
                </center>
            </div>
            <div className='e-card'>
                <center><p className='register-no'>Registration No.: 2020101</p></center>
                <div className='card-head'>
                    <div className='card-image'>
                        <AccountCircleIcon className='e-img' />
                    </div>
                    <div className='card-tittle'>
                        {/* <center><p className='register-no'>Registration No.: 2020101</p></center> */}
                        <div className='basic-info'>
                            <div style={{ display: "flex" }}>
                                <div className='labels'>
                                    <p>First Name </p>
                                    <p>Date of Birth </p>
                                    <p>Mobile No. </p>
                                    <p>Email Id </p>
                                </div>
                                <div className='inputs'>
                                    <p><span className='colon'>:&nbsp;</span> Pratiksha</p>
                                    <p><span className='colon'>:&nbsp;</span> 28-10-2000</p>
                                    <p><span className='colon'>:&nbsp;</span> 8829754671</p>
                                    <p><span className='colon'>:&nbsp;</span> pratiksha@gmail.com</p>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className='labels'>
                                    <p>Last Name </p>
                                    <p>Gender </p>
                                    <p>Alternate No. </p>
                                    <p>Alternate Id </p>
                                </div>
                                <div className='inputs'>
                                    <p><span className='colon'>:&nbsp;</span> Verma</p>
                                    <p><span className='colon'>:&nbsp;</span> Female</p>
                                    <p><span className='colon'>:&nbsp;</span> 9276487648</p>
                                    <p><span className='colon'>:&nbsp;</span> pratiksha1003@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <div className='divider-line'></div>
                </center>
                <div className='address-info'>
                    <div className='container-head'>
                        <h5>Address :</h5>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ display: "flex" }}>
                            <div className='labels'>
                                <p>House/Strit No </p>
                                <p>Landmark </p>
                                <p>State </p>
                            </div>
                            <div className='inputs'>
                                <p><span className='colon'>:&nbsp;</span> 285</p>
                                <p><span className='colon'>:&nbsp;</span> Mangal Gardan</p>
                                <p style={{ marginTop: "7px" }}><span className='colon'>:&nbsp;</span> Madhya Pradesh</p>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className='labels'>
                                <p>Area </p>
                                <p>City </p>
                                <p>Country </p>
                            </div>
                            <div className='inputs'>
                                <p><span className='colon'>:&nbsp;</span> Veena Nagar, MR 10</p>
                                <p><span className='colon'>:&nbsp;</span> Indore</p>
                                <p style={{ marginTop: "7px" }}><span className='colon'>:&nbsp;</span> India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <div className='divider-line'></div>
                </center>
                <div className='education-info'>
                    <div className='container-head'>
                        <h5>Education :</h5>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div className='labels'>
                            <p className='edu-labels' style={{ marginLeft: "15px" }}>Class</p>
                            <p>10th </p>
                            <p>12th </p>
                            <p>Graduation </p>
                            <p>Post Graduation </p>
                        </div>
                        <div className='inputs'>
                            <p className='edu-labels' style={{ marginLeft: "25px" }}>Subject</p>
                            <p><span className='colon'>:&nbsp;</span> State Board</p>
                            <p><span className='colon'>:&nbsp;</span> State Board</p>
                            <p><span className='colon'>:&nbsp;</span> B.Sc</p>
                            <p style={{ marginTop: "10px" }}><span className='colon'>:&nbsp;</span> MCA</p>
                        </div>
                        <div className='inputs'>
                            <p className='edu-labels' style={{ marginLeft: "165px" }}>Institude</p>
                            <p style={{ width: "450px" }}>Shri Hari Public School</p>
                            <p style={{ width: "450px" }}>Shri Hari Public School</p>
                            <p style={{ width: "450px" }}>Devi Ahilya Vishwavidyalaya</p>
                            <p style={{ width: "450px", marginTop: "10px" }}>Acropolis Institute Of Technology And Research</p>
                        </div>
                        <div className='inputs'>
                            <p className='edu-labels' style={{ marginLeft: "25px" }}>Marks</p>
                            <p>75.1%</p>
                            <p>70.5%</p>
                            <p>7.3 cgpa</p>
                            <p style={{ marginTop: "10px" }}>7.1 cgpa</p>
                        </div>
                    </div>
                </div>
                <center>
                    <div className='divider-line' style={{ margin: "31px" }}></div>
                </center>
                <div className='document-info'>
                    <div className='container-head'>
                        <h5>Document :</h5>
                    </div>
                    <div style={{ display: "grid" }}>
                        <div className='labels'>
                            <p>Aadhar Card</p>
                            <p>Pan Card</p>
                            <p>Mark Sheet</p>
                        </div>
                        <div className='inputs'>
                            <p>Aadhar Card</p>
                            <p>Pan Card</p>
                            <p>Mark Sheet</p>
                        </div>
                    </div>
                </div>
                <center>
                    <div className='divider-line' style={{ margin: "31px" }}></div>
                </center>
                <div className='bank-info'>
                    <div className='container-head'>
                        <h5>Bank :</h5>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ display: "flex" }}>
                            <div className='labels'>
                                <p>Account Number </p>
                                <p>Bank Name </p>
                            </div>
                            <div className='inputs'>
                                <p><span className='colon'>:&nbsp;</span> 776298100291</p>
                                <p><span className='colon'>:&nbsp;</span> HDFC</p>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className='labels'>
                                <p>IFSC Code </p>
                                <p>Holder Name </p>
                            </div>
                            <div className='inputs'>
                                <p><span className='colon'>:&nbsp;</span> BkHDFC1045</p>
                                <p><span className='colon'>:&nbsp;</span> Pratiksha Verma</p>
                            </div>
                        </div>
                        <div >
                            <div className='labels'>
                                <p>Passbook/Check Book </p>
                                <p>City </p>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <div className='divider-line'></div>
                </center>
                <div className='register-info'>
                    <div className='container-head'>
                        <h5>Registration :</h5>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div style={{ display: "flex" }}>
                            <div className='labels'>
                                <p>Registration Date </p>
                                <p>Registration Time </p>
                            </div>
                            <div className='inputs'>
                                <p><span className='colon'>:&nbsp;</span> 28-Sep-2013</p>
                                <p><span className='colon'>:&nbsp;</span> 10:15 AM</p>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className='labels'>
                                <p>Admin Name </p>
                                <p>Admin Email </p>
                            </div>
                            <div className='inputs'>
                                <p><span className='colon'>:&nbsp;</span> Khushi Sharma</p>
                                <p><span className='colon'>:&nbsp;</span> khushi.sharma@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EDetails;