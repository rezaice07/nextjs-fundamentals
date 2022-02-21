import React, { Component } from 'react'
import { Router } from 'next/router';
import { withRouter } from "next/router"
import Link from 'next/link';

class productDetail extends Component {

    constructor(props) {
      super(props)
    
      //console.log('constructor')
    }

    componentDidMount = () => {
        //console.log('componentDidMount')
    }
    render() {
        
        const { query } = this.props.router;
        console.log('Product Id'+query.productId)

        return (
            <div>
                <h1>Product Detail with Id {query.productId}</h1>
                <br/><Link href='/product'>Product List</Link>

                <br/><Link href='/product/12/review'>Next</Link>

            </div>
        )
    }
}

export default withRouter(productDetail)