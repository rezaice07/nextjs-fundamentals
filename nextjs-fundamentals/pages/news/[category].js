import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const ArticlesByCategory = ({ articles }) => {
  return (
    <div>
      <h1>Articles By Categories</h1>
      <br />
      {
        articles.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          )
        })
      }
      <br /><Link href='/news' passHref>Go to News</Link>

    </div>
  )
}

export default ArticlesByCategory;


export const getServerSideProps = async (context) => {
  const { params,req,res,query } = context;
  console.log(query)
  //console.log(req);
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie',['name=NEXTJS_FUNDAMENTALS']);
  
  //console.log(res);

  const { category } = params;

  const resData = await axios.get(`http://localhost:4000/news?category=${category}`);
  const data=await resData.data;

  return {
          props: {
              articles: data
          }
      }
  }