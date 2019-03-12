import React, { Component } from 'react'
export default class Slide extends Component {
    render() {
        return (
            <li className="slide">
                {this.props.children}
            </li>
        )
    }
}
