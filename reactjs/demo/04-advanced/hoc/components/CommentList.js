import React, { Component } from 'react';
import DataSource from '../ds/DataSource';
import Comment from './Comment';
import Button from './Button'
export default class CommentList extends Component {
    constructor(){
        super();
        this.state = {
            comments: DataSource.getComments()
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
            comments: DataSource.getComments()
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.comments.map((item,index)=>(
                            <Comment comment={item} key={index}/>
                        ))
                    }
                </ul>
                <Button/>
            </div>
        )
    }
}
