import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const PostDetail = ({ post }) => {

  const router=useRouter();
  if(router.isFallback){
    return <h1>Loading</h1>
  }
  return (
    <div>
      <h1>Post Detail</h1>

      <h3>{post.id}</h3>
      <h3>{post.title}</h3>
      <h3>{post.body}</h3>

      <Link style={{ color: 'yellow' }} href={`/posts`} passHref>Back to Posts</Link>
    </div>
  )
}

export default PostDetail

export const getStaticPaths= async()=> {


  // const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  // .then((res) => {
  //   return res.data;
  // });

  // const paths=data.map((post)=>{
  //   return {
  //     params:{
  //       postId:`${post.id}`
  //     }
  //   }
  // })


  return {
    paths: [
      { params: { postId: '1' } },
      // { params: { postId: '2' } },
      // { params: { postId: '3' } },
    ],
    //paths,
    fallback: true,
  }
}


export const getStaticProps= async (context)=> {
  const { params } = context;

  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
                
  const {data} = await res.data;

  if(!data.id){
    return{
      notFound:true
    }
  }
  
  console.log(`Generating page for /posts/${params.postId}`)

  return {
    props: {
      post: data
    }
  }
}