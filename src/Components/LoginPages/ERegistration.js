import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

import './ERegistration.css';

function ERegistration(props) {

    // Initialize state with the initial values
    const initialEmpData = {
        fname: "",
        lname: "",
        dob: "",
        gender: "",
        tel1: "",
        tel2: "",
        email1: "",
        email2: "",
        house: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        country: "",
        subject10: "",
        institude10: "",
        marks10: "",
        subject12: "",
        institude12: "",
        marks12: "",
        subjectug: "",
        institudeug: "",
        marksug: "",
        subjectpg: "",
        institudepg: "",
        markspg: "",
        degree: "",
        adharcard: null,
        pancard: null,
        marksheet: null,
        img: null,
        account: "",
        ifsc: "",
        bank: "",
        holder: "",
        passbook: null
    };

    const [empData, setEmpData] = useState(initialEmpData);

    // const navigate = useNavigate();

    // Function to handle input changes
    const inputData = (event) => {
        const { name, value, type, files } = event.target;

        if (type === 'file') {
            setEmpData(prevData => ({
                ...prevData,
                [name]: files[0] // Handle file input differently
            }));
        } else {
            setEmpData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    // Function to clear all input fields
    const inputClear = () => {
        setEmpData(initialEmpData); // Reset state to initial values
    };

    // Function to handle form submission
    const onSubmits = (e) => {
        e.preventDefault();
        console.log(empData);
        // navigate('/mainpage/elist', {state : {empData}})
    };

    return (
        <div>
            <div className="head-1">
                <h3>Employee Registration</h3>
                <center>
                    <p></p>
                    <p></p>
                </center>
            </div>
            <div className="cont">
                <form onSubmit={onSubmits}>
                    <div className='container-1'>
                        <div className='headig'>
                            <p>Employee Details :</p>
                        </div>
                        <div className="e-details">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>First Name:</label></td>
                                        <td><input type="text" name="fname" id="fname" value={empData.fname} onChange={inputData} /></td>
                                        <td><label>Last Name:</label></td>
                                        <td><input type="text" name="lname" id="lname" value={empData.lname} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Date Of Birth:</label></td>
                                        <td><input type="date" name="dob" id="dob" value={empData.dob} onChange={inputData} /></td>
                                        <td><label>Gender:</label></td>
                                        <td>
                                            <span>
                                                <input type="radio" name="gender" id='male' value="male" checked={empData.gender === 'male'} onChange={inputData} />&nbsp; Male&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" name="gender" id='female' value="female" checked={empData.gender === 'female'} onChange={inputData} />&nbsp; Female&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" name="gender" id='others' value="others" checked={empData.gender === 'others'} onChange={inputData} />&nbsp; Others
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Mobile No:</label></td>
                                        <td><input type="tel" name="tel1" id="tel1" value={empData.tel1} onChange={inputData} /></td>
                                        <td><label>Alternate No:</label></td>
                                        <td><input type="tel" name="tel2" id="tel2" value={empData.tel2} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Email:</label></td>
                                        <td><input type="email" name="email1" id="email1" value={empData.email1} onChange={inputData} /></td>
                                        <td><label>Alternate Email:</label></td>
                                        <td><input type="email" name="email2" id="email2" value={empData.email2} onChange={inputData} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="line">
                        <p></p>
                    </div>
                    <div className='container-1'>
                        <div className="headig">
                            <p>Employee Address :</p>
                        </div>
                        <div className="e-details">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>House/Strit No:</label></td>
                                        <td><input type="text" name="house" id="house" value={empData.house} onChange={inputData} /></td>
                                        <td><label>Area:</label></td>
                                        <td><input type="text" name="area" id="area" value={empData.area} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Landmark:</label></td>
                                        <td><input type="text" name="landmark" id="landmark" value={empData.landmark} onChange={inputData} /></td>
                                        <td><label>City:</label></td>
                                        <td><input type="text" name="city" id="city" value={empData.city} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>State:</label></td>
                                        <td><input type="text" name="state" id="state" value={empData.state} onChange={inputData} /></td>
                                        <td><label>Country:</label></td>
                                        <td><input type="text" name="country" id="country" value={empData.country} onChange={inputData} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="line">
                        <p></p>
                    </div>
                    <div className="container-1">
                        <div className='headig'>
                            <p>Employee Education :</p>
                        </div>
                        <div className='e-details'>
                            <table className='edu-details'>
                                <tbody>
                                    <tr>
                                        <td><label>Class:</label></td>
                                        <td><label>Subject:</label></td>
                                        <td><label>Institude:</label></td>
                                        <td><label>Marks:</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="class10" id="class10" value={"10th"} disabled /></td>
                                        <td><input type="text" name="subject10" id="subject10" value={empData.subject10} onChange={inputData} /></td>
                                        <td><input type="text" name="institude10" id="institude10" value={empData.institude10} onChange={inputData} /></td>
                                        <td><input type="text" name="marks10" id="marks10" value={empData.marks10} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="class12" id="class12" value={"12th"} disabled /></td>
                                        <td><input type="text" name="subject12" id="subject12" value={empData.subject12} onChange={inputData} /></td>
                                        <td><input type="text" name="institude12" id="institude12" value={empData.institude12} onChange={inputData} /></td>
                                        <td><input type="text" name="marks12" id="marks12" value={empData.marks12} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="classug" id="classug" value={"Graduation"} disabled /></td>
                                        <td><input type="text" name="subjectug" id="subjectug" value={empData.subjectug} onChange={inputData} /></td>
                                        <td><input type="text" name="institudeug" id="institudeug" value={empData.institudeug} onChange={inputData} /></td>
                                        <td><input type="text" name="marksug" id="marksug" value={empData.marksug} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="classpg" id="classpg" value={"Post Graduation"} disabled /></td>
                                        <td><input type="text" name="subjectpg" id="subjectpg" value={empData.subjectpg} onChange={inputData} /></td>
                                        <td><input type="text" name="institudepg" id="institudepg" value={empData.institudepg} onChange={inputData} /></td>
                                        <td><input type="text" name="markspg" id="markspg" value={empData.markspg} onChange={inputData} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="line">
                        <p></p>
                    </div>
                    <div className="container-1">
                        <div className='headig'>
                            <p>Employee Document :</p>
                        </div>
                        <div className='e-details'>
                            <table className='edu-details'>
                                <tbody>
                                    <tr>
                                        <td><label>Aadhar Card:</label></td>
                                        <td><label>Pan Card:</label></td>
                                        <td><label>Mark Sheet:</label>
                                            <select name="degree" id="degree" defaultValue="Select Degree" onChange={inputData}>
                                                <option disabled>Select Degree</option>
                                                <option value="underGraduate" id='option'>Under Graduate</option>
                                                <option value="postGraduate" id='option'>Post Graduate</option>
                                            </select>
                                        </td>
                                        <td><label>Employee Photo:</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="file" name="adharcard" id="adharcard" onChange={inputData} /></td>
                                        <td><input type="file" name="pancard" id="pancard" onChange={inputData} /></td>
                                        <td><input type="file" name="marksheet" id="marksheet" onChange={inputData} /></td>
                                        <td><input type="file" name="img" id="img" onChange={inputData} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='line' style={{ marginTop: "5px" }}>
                        <p></p>
                    </div>
                    <div className="container-1">
                        <div className='headig'>
                            <p>Bank Account Details:</p>
                        </div>
                        <div className='e-details'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Account Number:</label></td>
                                        <td><input type="number" name="account" id="account" value={empData.account} onChange={inputData} /></td>
                                        <td><label>IFSC Code:</label></td>
                                        <td><input type="text" name="ifsc" id="ifsc" value={empData.ifsc} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Bank Name:</label></td>
                                        <td><input type="text" name="bank" id="bank" value={empData.bank} onChange={inputData} /></td>
                                        <td><label>Holder Name:</label></td>
                                        <td><input type="text" name="holder" id="holder" value={empData.holder} onChange={inputData} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Passbook/Check Book:</label></td>
                                        <td><input type="file" name="passbook" id="passbook" onChange={inputData} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="submit" style={{ textAlign: "center" }}>
                        <button type='button' onClick={inputClear}>Clear</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ERegistration;