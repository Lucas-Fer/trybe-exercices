import './App.css';
import React, { Component } from 'react';
import TaskList from './taskList';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <TaskList />
      </>
    );
  }
}

export default App;
