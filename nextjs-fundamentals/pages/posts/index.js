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


export const getStaticProps = async () => {
  const resData = await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {      
      return res.data;
    });

  const data = resData.slice(0, 3);
  return {
    props: {
      posts: data
    }
  }
}