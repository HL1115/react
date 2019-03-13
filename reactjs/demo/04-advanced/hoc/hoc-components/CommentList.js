import React, { Component } from 'react';
import Comment from './Comment';
import Button from './Button';
import withSubscription from './withSubscription';
class CommentList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.data.map((item,index)=>(
                            <Comment comment={item} key={index}/>
                        ))
                    }
                </ul>
                <Button/>
            </div>
        )
    }
}
export default withSubscription(CommentList,(ds)=>ds.getComments())