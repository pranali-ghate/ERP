import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import MainPage from './Home';

// CSS
import './Login.css'

function Login(props) {

    const [data, setData] = useState({
        email : "",
        password : ""
    });

    const navigate = useNavigate();

    const inputData = (event)=>{
        let {name, value} = event.target;

        setData(predata =>({
            ...predata,
            [name] :value
        }));
    }

    const submit = (e)=>{
        e.preventDefault();
        // console.log(data)
        navigate('./mainpage')
    }

    return (
        <div>
            <form className='form' onSubmit={submit}>
                <input type='email' placeholder='Admin Email' value={data.email} name='email' onChange={inputData}/>
                <br/><br/>
                <input type='password' placeholder='Admin Password' value={data.password} name='password' onChange={inputData}/>
                <br/><br/>
                <button type='submit'>Login</button>
            </form>
            <p className='hr-line'/>
            <NavLink>Forgot Password ?</NavLink>
        </div>
    );
}

export default MainPage(Login);