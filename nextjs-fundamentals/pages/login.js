import React from 'react'

import { useSession,getSession ,signIn,signOut} from 'next-auth/react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>


        </div>
    )
}

export default Login


export const getServerSideProps = async ({ req, res }) => {
   // const { user } = req.session
    console.log(req.session);

    //if (!user) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    //}

    return {
        props: { user },
    }
}