import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slides from './Slides';
import Slide from './Slide';

class Carousel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Slides pager={true} style={{width:800}}>
                <Slide><img src={require('./images/banner01.jpg')} alt="ss" /></Slide>
                <Slide><img src={require('./images/banner02.jpg')} alt="" /></Slide>
                <Slide><img src={require('./images/banner03.jpg')} alt="" /></Slide>
                <Slide><img src={require('./images/banner04.jpg')} alt="" /></Slide>
                <Slide><img src={require('./images/banner05.jpg')} alt="" /></Slide>
            </Slides>
        )
    }
}

ReactDOM.render(<Carousel />, document.getElementById('root'));






// const str = 'hello react';
// const ele = <h1 className="tit" id="title">hello world</h1>;
// console.log(ele);
// let ele = React.createElement('h1',{
//         id:'title',
//         className:'tit'
//     },
//     ['hello']
// );
// 自己封装render
// let obj = {
//     type:'h1',
//     props:{
//         id:'title',
//         className:'tit',
//         children:[
//             'hello world',
//             {
//                 type:"p",
//                 props:{
//                     id:'box',
//                     children:['新年好']
//                 }
//             }
//         ]
//     }
// }
// function render(obj,container){
//     let {type,props} = obj;
//     var ele = document.createElement(type);
//     Object.keys(props).forEach((key)=>{
//         if(key === 'className'){
//             ele.className = props[key];
//             // ele.setAttribute('class',props[key]);
//         }else if(key === 'children'){
//             props[key].forEach(item=>{
//                 if(typeof item === 'object'){
//                     render(item,ele)
//                 }else{
//                     let txtNode = document.createTextNode(item);
//                     ele.appendChild(txtNode);
//                 }
//                 // ele.innerHTML = item;
//             })
//         }else{
//             ele[key] = props[key];
//         }
//     })
//     container.appendChild(ele);
// }
// render(obj,document.getElementById('root'));

// const str = 'hello react';

// const ele = <h1 className="tit" id="title">hello world</h1>;
// ReactDOM.render(ele,document.getElementById('root'));
// function tick(){
//     const ele = (<div>
//         <p>{new Date().toLocaleString()}</p>
//         <p>时钟</p>
//     </div>)
//     ReactDOM.render(ele,document.getElementById('root'));
// }
// setInterval(tick,1000);
// tick();
