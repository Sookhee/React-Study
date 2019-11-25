import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const comments = [
  {name : 'minji', content : 'My Comment!'},
  {name : 'jiwon', content : '오빠는 니 말 듣기 싫다~'},
  {name : 'yerin', content : '왹왹'},
  {name : 'jieun', content : '곽잡아 오빠 달린다'},
];


function App() {
  return (
    <div className="App" style={{padding : 16, backgroundColor : '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {comments.map((comment, index) => {
          return (
            <Comment name={comment.name} content={comment.content}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
