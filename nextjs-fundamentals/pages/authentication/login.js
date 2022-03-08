import axios from 'axios'
import React, { Component, useState } from 'react'

const Login = () => {

    const [mobileNo, setMobileNo] = useState('01718055626');
    const [otp, setOtp] = useState('6273');

    const handleInputOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        },
            () => { console.log(this.state.mobileNo) }
        )
    }

    const verifyOtp = async (mobile) => {
        
        const url = `https://madolapi.azurewebsites.net/api/otp/${mobile}`;

        const res = await fetch(url);

        const data = await res.json();
    
        return data
    }

    const handleFormSubmit = async(e) => {
        debugger;
        e.preventDefault();

        const  mobileNo=e.target.mobileNo.value;
        const  otp=e.target.otp.value;
        const res = await verifyOtp(mobileNo);

        if (!res || res.otpNo !== otp) {
            console.log('Otp has expired or invalid otp')
            return;
        }

        console.log('Otp Valid')

    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h1>Login</h1>
                <label>Mobile</label><input type='text' value={mobileNo} id="mobileNo" name="mobileNo" onChange={handleInputOnChange} />
                <br />
                <label>Otp</label><input type='text' value={otp} id="otp" name="otp" onChange={handleInputOnChange} />
                <br />
                <button type="submit"> Login</button>
            </form>
        </div>
    )

}

export default Login