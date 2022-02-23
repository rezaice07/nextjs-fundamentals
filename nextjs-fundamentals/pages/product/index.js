import axios from 'axios'
import Link from 'next/link'
import React, { Component } from 'react'

export class index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      produts: []
    }
  }

  componentDidMount = () => {
    this.setState({
      produts: this.props.products
    });
  }

  render() {

    const { produts } = this.state;

    return (
      <div>
        <h1>List of Products</h1>
        {
          produts.map((item, index) => {
            return (
              <Link key={index} href={`/product/${item.id}`} passHref>
                <h4> {item.id}. Name: {item.title} Price: {item.unitPrice}</h4>
              </Link>
            )
          })
        }
        <br /><Link href='/' passHref>Go to Home</Link>
      </div>
    )
  }
}

export default index


export const getStaticProps = async () => {
  const resData = await axios.get('http://localhost:4000/products')
    .then(res => {
      return res.data
    });

  const data = resData//.slice(0, 3);
  //console.log(data)
  return {
    props: {
      products: data
    },
    revalidate:30 //30 sec then api will be updated
  }
}
