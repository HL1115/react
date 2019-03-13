import React, { Component } from 'react'

export default class TextBlock extends Component {
    render() {
        return (
            <div>
                {this.props.text.msg}
            </div>
        )
    }
}
