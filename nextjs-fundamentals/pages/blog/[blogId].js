import Link from 'next/link'
import React, { Component } from 'react'

class blogDetail extends Component {
  render() {
    return (
        <>
      <div>[blogId]</div>
      <Link href="/blog">Back to list</Link>
      </>
    )
  }
}

export default blogDetail