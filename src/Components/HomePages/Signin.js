import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import MainPage from './Home';

// CSS
import './Signin.css'

function Signin(props) {

    const departmentOption = {
        "Accounting": ["Accounting manager", "Accounting officer", "Accounting supervisor", "Business analyst", "Cost accountant", "CPA",
            "General accountant", "Project accountant", "Staff accountant"],

        "Administrative": ["Administrative assistant", "Executive Assistant", "Office Manager", "Receptionist", "Administrator",
            "Administrative Specialist", "Administrative Director", "Office Coordinator", "Administrative Manager", "Project Manager"],

        "Finance": ["Auditor", "Financial analyst", "Finance manager", "Finance clerk", "Finance officer", "chief financial officer", "Financial assistant",
            "Finance director", "Financial administrator", "Finance coordinator"],

        "Human Resourse": ["HR Manager", "HR Specialist", "Employee Relations Manager", "HR Coordinator", "HR Generalist", "HR Analyst",
            "Recruiter", "HR Director", "Training", "Recruitment Manager"],

        "IT": ["Network administrator", "UX designer", "Data science and analytics", "Database administrator", "Full-stack developer", "Software development",
            "Technical support", "Cloud engineer", "Web developer", "Cybersecurity"],

        "Marketing": ["Social media coordinator", "marketing executive", "Marketing coordinator", "SEO specialist", "marketing assistant",
            "marketing analyst", "content marketer", "Digital strategist", "director of marketing", "Product marketing manager"],

        "Operations": ["Operations Manager", "Director of Operations", "Operations Analyst", "Chief Operating Officer", "operations coordinator",
            "Operations supervisor", "Project manager", "Operations engineer", "Vice presidents of operation", "Operations Assistant"],

        "Product": ["onsite manager", "offshore manager", "business analyst", "Product manager", "Software architect", "Associate Product Manager",
            "Senior Product Manager", "Group Product Manager", "Chief Product Officer", "Technical Product Manager"],

        "Purchasing": ["Procurement Manager", "Procurement Specialist", "Buyer", "Procurement Assistant", "Procurement Clerk", "Supply chain management",
            "Chief procurement officer", "Purchasing Assistant", "Purchasing Coordinator", "Materials Director"],

        "Sales": ["collection agent", "sales consultant", "account executive", "account manager", "sales representative", "sales manager",
            "regional sales manager", "Sales administrator", "Sales support", "Client services"]
    }

    const [selectedDepartment, setSelectedDepartment] = useState('');

    const [selectedPosition, setPositionDepartment] = useState('');

    const [adminData, setAdminData] = useState({
        adminfname: "",
        adminlname: "",
        adminmobile: "",
        adminemail: "",
        admindepartment: "",
        adminposition: "",
        password: "",
        cpassword: ""
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    // handle department change
    const departmentChange = (event) => {
        setSelectedDepartment(event.target.value);
        setPositionDepartment('');
        setAdminData(prevData => ({
            ...prevData,
            admindepartment: event.target.value
        }));
    }

    // handle position change
    const positionChange = (event) => {
        setPositionDepartment(event.target.value);
        setAdminData(prevData => ({
            ...prevData,
            adminposition: event.target.value
        }));
    }

    // handle input values
    const adminInput = (event) => {
        let { name, value } = event.target;

        setAdminData(predata => ({
            ...predata,
            [name]: value
        }));
    }

    const passformate = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // form validation
    const validate = () => {
        const newErrors = {};
        if (!adminData.adminfname) {
            newErrors.adminfname = "First Name is required.";
        }

        if (!adminData.adminlname) {
            newErrors.adminlname = "Last Name is required.";
        }

        if (!adminData.adminmobile) {
            newErrors.adminmobile = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(adminData.adminmobile)) {
            newErrors.adminmobile = "Mobile number must be 10 number";
        }

        if (!adminData.adminemail) {
            newErrors.adminemail = "Email is required.";
        } else if (!(adminData.adminemail.match(emailPattern))) {
            newErrors.adminemail = "Email address is not correct";
        }

        if (!adminData.admindepartment) {
            newErrors.admindepartment = "Department is required.";
        }

        if (!adminData.adminposition) {
            newErrors.adminposition = "Position is required.";
        }

        if (!adminData.password) {
            newErrors.password = "Password is required.";
        } else if (adminData.password.length <= 5 || adminData.password.length >= 25) {
            newErrors.password = "Password More Then 5 And Less Then 25 Character.";
        } else if (!(adminData.password.match(passformate))) {
            newErrors.password = "Password Must Include Lower And Upper Alphabet, Number 0 to 9 And Any Special Symbol Like !@#$%&*";
        }

        if (!adminData.cpassword){
            newErrors.cpassword = "Password is required.";
        } else if (adminData.password !== adminData.cpassword) {
            newErrors.cpassword = "Passwords must match"
        }

        return newErrors;
    }

    // handle form submit
    const submit = (e) => {
        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log(adminData)
            navigate('/')
            alert("Registration Successfull")
        } else {
            setErrors(formErrors);
        }
    }

    return (
        <div>
            <form className='signin-form' onSubmit={submit}>
                <div className='input'>
                    <div>
                        <input type='text' placeholder='First Name' value={adminData.adminfname} name='adminfname' onChange={adminInput} className={errors.adminfname ? 'error' : ''}/>
                        {errors.adminfname && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.adminfname}</span>}
                    </div>
                    <div>
                        <input type='text' placeholder='Last Name' value={adminData.adminlname} name='adminlname' onChange={adminInput} className={errors.adminlname ? 'error' : ''}/>
                        {errors.adminlname && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.adminlname}</span>}
                    </div>
                </div>
                <br/>
                <div className='input'>
                    <div>
                        <input type='tel' placeholder='Mobile' value={adminData.adminmobile} name='adminmobile' onChange={adminInput} className={errors.adminmobile ? 'error' : ''}/>
                        {errors.adminmobile && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.adminmobile}</span>}
                    </div>
                    <div>
                        <input type='email' placeholder='Email' value={adminData.adminemail} name='adminemail' onChange={adminInput} className={errors.adminemail ? 'error' : ''}/>
                        {errors.adminemail && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.adminemail}</span>}
                    </div>
                </div>
                <br />
                <div className='input'>
                    <div>
                        <select value={selectedDepartment} onChange={departmentChange} className={errors.admindepartment ? 'dropdown error' : 'dropdown'}>
                            <option value="">Select Department</option>
                            {Object.keys(departmentOption).map((department) => (
                                <option key={department} value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                        {errors.admindepartment && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.admindepartment}</span>}
                    </div>
                    <div>
                        <select value={selectedPosition} onChange={positionChange} disabled={!selectedDepartment} className={errors.adminposition ? 'dropdown error' : 'dropdown'}>
                            <option value="">Select Position</option>
                            {selectedDepartment && departmentOption[selectedDepartment].map((position) => (
                                <option key={position} value={position}>
                                    {position}
                                </option>
                            ))}
                        </select>
                        {errors.adminposition && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.adminposition}</span>}
                    </div>
                </div>
                <br/>
                <div className='input'>
                    <div>
                        <input type='password' placeholder='Password' value={adminData.password} name='password' onChange={adminInput} className={errors.password ? 'error' : ''}/>
                        {errors.password && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.password}</span>}
                    </div>
                    <div>
                        <input type='password' placeholder='Conform Password' value={adminData.cpassword} name='cpassword' onChange={adminInput} className={errors.cpassword ? 'error' : ''}/>
                        {errors.cpassword && <span className='error'><ErrorOutlineIcon sx={{ fontSize: 18 }} /> {errors.cpassword}</span>}
                    </div>
                </div>
                <br />
                <button type='submit'>Signin</button>
            </form>
        </div>
    );
}

export default MainPage(Signin);