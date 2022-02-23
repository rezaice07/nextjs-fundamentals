import axios from 'axios';
import Link from 'next/link';
import { withRouter } from "next/router";
import React, { Component } from 'react';


class productDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            product: {}
        }

    }

    componentDidMount = () => {
        this.setState({
            product: this.props.product
        });
    }
    render() {

        const { query,isFallback } = this.props.router;
        //console.log('Product Id'+query.productId)

        const { product } = this.state;

        if(isFallback){
          return <h1>Loading</h1>
        }

        return (
            <div>
                {/* <h1>Product Detail with Id {query.productId}</h1> */}



                <h1>Post Detail</h1>

                <h3>Id: {product.id}</h3>
                <h3>Name: {product.title}</h3>
                <h3>Price: {product.unitPrice}</h3>
                <h3>Sku: {product.Sku}</h3>

                <br /><Link href='/product' passHref>Product List</Link>


            </div>
        )
    }
}

export default withRouter(productDetail)




export const getStaticPaths = async () => {

    return {
        paths: [
            { params: { productId: '1' } }
        ],
        //paths,
        fallback: true,
    }
}


export const getStaticProps = async (context) => {
    const { params } = context;

    const data = await axios.get(`http://localhost:4000/products/${params.productId}`)
        .then((res) => {
            return res.data;
        });

    // const resData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);                  
    // const data=await resData.json();

    if (!data.id) {
        return {
            notFound: true
        }
    }

    console.log(`Generating page for /product/${params.productId}`)

    return {
        props: {
            product: data
        },
        revalidate:30 //30 sec then api will be updated
    }
}