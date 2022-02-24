import axios from 'axios'
import Link from 'next/link'
import React, { Component } from 'react'

class News extends Component {

constructor(props) {
  super(props)

  this.state = {     
    articles:[]
  }
}

componentDidMount= async()=>{

  // const data = await axios.get('http://localhost:4000/news')
  //   .then(res => {
  //     return res.data
  //   })

  this.setState({
    articles:this.props.articles
  })
}

  render() {
    const {articles} = this.state
    return (
      <div>
        <h1>List of Articles</h1>
        {
          articles.map((item, index) => {
            return (
              <Link key={index} href={`/news/${item.id}`} passHref>
                <h4> {item.id}. {item.title}</h4>
              </Link>
            )
          })
        }
        <br /><Link href='/' passHref>Go to Home</Link>
      </div>
    )
  }
}

export default News


export const getServerSideProps = async () => {
  const data = await axios.get('http://localhost:4000/news')
    .then(res => {
      return res.data
    })

    return {
      props:{
        articles:data
      }
    }
}


//https://www.youtube.com/watch?v=UP8s2_8jxIQ&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=33&ab_channel=Codevolution

