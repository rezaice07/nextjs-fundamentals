import React from 'react'
import User from '../com_users/user'

const usersFn=({ users })=> {
   
    return (
        <div>
            <User users={users} />
        </div>
    )
}

export default usersFn



export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data)

    return {
        props: {
            users: data
        }
    }
}