import './App.css';
import React, { Component } from 'react';
import TaskList from './taskList';
import Header from './Header';
import Content from './Content';
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <TaskList />
        <Footer />
      </>
    );
  }
}

export default App;
