import Link from 'next/link'
import React, { Component } from 'react'
import { withRouter } from 'next/router'

class Blog extends Component {

    constructor(props) {
        super(props)

        console.log('Constructor')
        this.state={
            username:''
        }
    }

    componentDidMount = () => {
        console.log('componentDidMount')

    }

    handleToGoHome = () => {
        this.setState({username:'rejaice07'});
        //this.props.router.push('/')
        this.props.router.replace('/')
    }
    render() {
        console.log('render')
        return (
            <div style={{ textAlign: "center" }}>
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