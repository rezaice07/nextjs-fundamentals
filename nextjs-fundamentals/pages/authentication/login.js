import axios from 'axios'
import { withRouter } from 'next/router'
import React, { Component, useState } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mobileNo: '01718055626',
            otp: '6273'
        }
    }

    handleInputOnChange = (e) => {
       
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        },
            () => { console.log(this.state.mobileNo) }
        )
    }

    

    handleFormSubmit = async (e) => {
        debugger;
        e.preventDefault();

        const {mobileNo,otp} = this.state;

        const resPosts = await NEXTService.getPosts();

        if (!resPosts) {
            console.log(`post not found`);
        }
        else {
            console.log(`post found ${resPosts.length}`);
        }

        const res = await NEXTService.verifyOtp(mobileNo);

        if (!res || res.otpNo !== otp) {
            console.log('Otp has expired or invalid otp');
        }
        else {
            console.log('Otp Valid')
        }

        //this.props.router.push('/.')
    }

    render() {
        const {mobileNo,otp} = this.state;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Login</h1>
                    <label>Mobile</label><input type='text' value={mobileNo} id="mobileNo" name="mobileNo" onChange={this.handleInputOnChange} />
                    <br />
                    <label>Otp</label><input type='text' value={otp} id="otp" name="otp" onChange={this.handleInputOnChange} />
                    <br />
                    <button type="submit"> Login</button>
                </form>
            </div >
        )
    }
}

export default withRouter(Login)


export class NEXTService{
    static verifyOtp = async (mobile) => {

        const url = `https://madolapi.azurewebsites.net/api/otp/${mobile}`;

        const res = await fetch(url);

        const data = await res.json();

        return data
    }

    static getPosts = async () => {

        const url = `https://jsonplaceholder.typicode.com/comments`;

        const res = await fetch(url);

        const data = await res.json();

        return data
    }

}