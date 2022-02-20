import React, { Component } from 'react'

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

        //const {data} = this.props

        console.log(this.props)
        //this.setState({ users: data })


    }

    render() {
        const { users = [] } = this.state;
        return (
            <div>
                <h1>User List</h1>
                {/* <ul>
                    {users.map((user, index) => {
                        return (
                            <li key={index}>{index + 1} name: {user.name} email: {user.email}</li>
                        )
                    })
                    }
                </ul> */}
            </div>
        )
    }
}

export default users


// export const getStaticProps=async ()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();

//     console.log(data)

//     return data
// }