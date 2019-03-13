import React, { Component } from 'react';
import DataSource from '../ds/DataSource';
import TextBlock from './TextBlock'
export default class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        }
    }
    componentDidMount = () => {
      DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount = () => {
      DataSource.removeChangeListener(this.handleChange)
    }
    handleChange = ()=>{
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)
        })
    }
    render() {
        return (
            <TextBlock text={this.state.blogPost}/>
        )
    }
}
