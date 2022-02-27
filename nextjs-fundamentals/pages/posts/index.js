import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {
        posts.map((item, index) => {
          return (
            <Link key={index} href={`/posts/${item.id}`} passHref>
              <h4 key={index}> {index + 1}. {item.title}</h4>
            </Link>
          )
        })
      }

    </div>
  )
}

export default Posts


export const getServerSideProps = async () => {
  const resData = await fetch('https://jsonplaceholder.typicode.com/posts');  
  const data = await resData.json();

  console.log(data)

  return {
    props: {
      posts: data//.slice(0, 3)
    }
  }
}