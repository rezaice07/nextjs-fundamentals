import Link from 'next/link'
import React, { Component } from 'react'

export class index extends Component {
  render() {
    return (
      <div>
          <h1> Product List</h1>
          <br/><Link href='/product/12'>Next</Link>
      </div>
    )
  }
}

export default index