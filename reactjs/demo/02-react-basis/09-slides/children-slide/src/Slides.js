import React, { Component,Fragment } from 'react'
import './slides.css';
export default class Slides extends Component {
    constructor(){
        super();
        this.state = {index:0};
    }
    componentDidMount = () => {
        this.timer = setInterval(this.move,2000);
    }
    move = ()=>{
        if(this.state.index>=this.props.children.length){
            this.ul.style.transitionDuration = 0+'s';
            this.ul.style.left = 0;
            setTimeout(()=>{
                this.ul.style.transitionDuration = 1+'s';
                this.setState({
                    index:1
                })
            },0)
            return;
        }
        this.setState((s)=>{
            return {index:s.index+1}
        })
    }
    handleOut = ()=>{
        this.timer = setInterval(this.move,2000);
    }
    leftClick = ()=>{
        if(this.state.index<=0){
            this.ul.style.transitionDuration = 0+'s';
            this.ul.style.left = -4000+'px';
            setTimeout(()=>{
                this.ul.style.transitionDuration = 1+'s';
                this.setState({
                    index:4
                })
            },0)
            return;
        }
        this.setState((s)=>{
            return {index:s.index-1}
        })
    }
    tab = (i)=>{
        this.setState((s)=>{
            return {index:i}
        })
    }
    render() {
        let style={
            width:(this.props.children.length+1)*this.props.style.width,
            left:this.state.index*-800,
            transitionDuration:1+'s'
        }
        return (
            <div  onMouseOut={this.handleOut} onMouseOver={()=>{clearInterval(this.timer)}} className="slides-wrap">
                <ul ref={(ul)=>this.ul = ul} style={style} className="slides">
                    {
                        this.props.children.map((item,index)=>{
                            return item
                        })
                    }
                    {this.props.children[0]}
                </ul>
                <div className="arrow">
                    <span onClick={this.leftClick} className="arrow-left"> &lt; </span>
                    <span onClick={this.move} className="arrow-right"> &gt; </span>
                </div>
                <ul className="dots" style={{display:this.props.pager?'block':'none'}}>
                    {
                        this.props.children.map((item,index)=>(
                            <li onClick={()=>this.tab(index)} className={this.state.index===index||(this.state.index===this.props.children.length&&index===0)?'active':''} key={index}></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
