import React, { Component } from 'react'
import User from '../components/user'

class users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    
    componentDidMount = async () => {

        // const res = await fetch('https://jsonplaceholder.typicode.com/users');
        // const data = await res.json();

        const {users} = this.props

        console.log(this.props)
        this.setState({ users: users })


    }

    render() {
        const { users = [] } = this.state;
        return (
            <div>
                <User users={users} />
            </div>
        )
    }
}

export default users


export const getStaticProps=async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data)

    return {
        props:{
            users:data
        }
    }
}