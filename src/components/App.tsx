import React, { Component } from 'react';
import './App.css';
import Add from '../Adder';

interface ListItem {
  ID: string,
  Text: string,
  Created: Date
}

class App extends Component {
  render() {
    return (
      <div className="container">
      <Add />

      </div>
    )
  }

  addItem() {

  }

  removeItem() {

  }
}

export default App;
