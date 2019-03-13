import React, { Component } from 'react';
import TextBlock from './TextBlock';
import withSubscription from './withSubscription';
class BlogPost extends Component {
   
    render() {
        return (
            <TextBlock text={this.props.data}/>
        )
    }
}
export default withSubscription(BlogPost,(ds,props)=>ds.getBlogPost(props.id))