import React from 'react'

const User=({users})=> {
  return (
    <div>
        
        <h1>User List</h1>
            <ul>
                {users.map((user, index) => {
                    return (
                        <li key={index}>{index + 1} name: {user.name} email: {user.email}</li>
                    )
                })
                }
            </ul>

    </div>
  )
}

export default User