import React, { Component } from 'react'
// import CommentList from './components/CommentList'
// import BlogPost from './components/BlogPost';
import CommentList from './hoc-components/CommentList'
import BlogPost from './hoc-components/BlogPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentList />
        <BlogPost id={1}/>
      </div>
    );
  }
}

export default App;
