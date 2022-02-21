import Link from 'next/link'
import React, { Component } from 'react'

class review extends Component {
  render() {
    return (
      <div>
          <h1>review</h1>
          <br/><Link href='/product/12'>Product List</Link>
          <br/><Link href='/product/12/review/234'>Next</Link>
      </div>
    )
  }
}

export default review