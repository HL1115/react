import React, { Component } from 'react'
import DataSource from '../ds/DataSource'
export default class Button extends Component {
    render() {
        let style = {
            width:100,
            height:50,
            border:'none',
            borderRadius:25,
            outline:'none'
        }
        return (
            <div>
                <input ref={(inp)=>this.inp = inp} type="text" name="" id=""/>
                <button onClick={()=>{DataSource.addComment(this.inp.value)}} style={style}>添加评论</button>
            </div>
        )
    }
}
