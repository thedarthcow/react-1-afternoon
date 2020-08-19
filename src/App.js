import React, { Component } from 'react';
import './index.css';   //Why do we need to import css here? The instructions do not specify to do this? Whats the reason?
import TopicBrowser from './components/TopicBrowser/TopicBrowser' 

class App extends Component {
  render() {      //render is another term for "display" in JS
    return (
      <TopicBrowser />    //Why do we need to render, return TopicBrowser?
    )
  }
}

export default App;

