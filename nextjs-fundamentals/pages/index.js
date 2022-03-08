import Link from 'next/link'
import React, { Component } from 'react'
import User from '../components/user'

class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>

        <User users={[{ name: 'reja', email: 'rezaice07@gmail.com' }]} />
        <h1> Welcome to Next js fundamentals</h1>

        <br />
        <h1>
          <Link href="/dashboard" replace>
            Dashboard
          </Link>
        </h1>
        <h1>
          <Link href="/blog" replace>
            Blog
          </Link>
        </h1>
        <h1>
          <Link href="/posts" replace>
            Blog Posts
          </Link>
        </h1>


        <h1>
          <Link href="/product" replace passHref>
            Products
          </Link>
        </h1>

        <h1>
          <Link href="/news" replace passHref>
            News
          </Link>
        </h1>


        <h1>
          <Link href="/events" replace passHref>
            Events
          </Link>
        </h1>

        <h1>
          <Link href="/authentication/login" replace passHref>
            Login
          </Link>
        </h1>



      </div>

    )
  }
}

export default Home