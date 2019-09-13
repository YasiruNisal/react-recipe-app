import React, { Component } from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            <Header title="404 Error" styleClass='default-hero'>
                 <h2 className="text-light text-uppercase">
                     Page can't be found
                 </h2>
                 <Link to='/' className="text-uppercase btn btn-secondary btn-lg mt-3">
                     Return Home
                 </Link>
            </Header>
        )
    }
}
