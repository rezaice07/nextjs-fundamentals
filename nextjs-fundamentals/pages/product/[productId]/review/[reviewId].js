import Link from 'next/link'
import React, { Component } from 'react'

class reviewDetail extends Component {
  render() {
    return (
      <div>
          <h1>review Detail</h1>
          <br/><Link href='/product/12/review'>Review List</Link>
      </div>
    )
  }
}

export default reviewDetail