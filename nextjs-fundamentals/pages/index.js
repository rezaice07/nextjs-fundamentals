import React, { Component } from 'react'
import Link from 'next/link'

class Home extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
       <h1> Welcome to Next js fundamentals</h1>

        <br />
        <Link href="/blog" replace> 
          Blog
        </Link>
      </div>

    )
  }
}

export default Home