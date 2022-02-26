import axios from 'axios'
import { withRouter } from 'next/router'
import React, { Component } from 'react'

class Blog extends Component {

    constructor(props) {
        super(props)

        console.log('Constructor')
        this.state = {
            username: '',
            blog: ''
        }
    }

    componentDidMount = () => {
        console.log('componentDidMount')

    }

    handleToGoHome = () => {
        this.setState({ username: 'rejaice07' });
        //this.props.router.push('/')
        this.props.router.replace('/')
    }

    handleChange = (e) => {
        const blog = e.target.value;
        const blogName = e.target.name;

        this.setState({
            [blogName]: blog
        })
    }

    handSumitBlog = async (e) => {
        e.preventDefault();

        const payLoad = {
            blog: this.state.blog
        }

        await axios.post(`http://localhost:3000/api/blog`, payLoad)
            .then((res) => {
                console.log(res)
            })
            .catch(resErr => {
                console.log(resErr)
            })
    }

    render() {
        console.log('render')
        return (
            <div style={{ textAlign: "center", margin: "50px" }}>

                <textarea name="blog" id="blog" onChange={this.handleChange} placeholder='write here your blog content' />
                <br />
                <button type='button' onClick={this.handSumitBlog}>Submit</button>

                <h1>
                    This is blog list page
                </h1>

                <button onClick={this.handleToGoHome}>Back to Home page</button>
                {/* <Link href={`/`} replace>
                    Back to Home page
                </Link> */}

            </div>
        )
    }
}

export default withRouter(Blog)