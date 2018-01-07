import React, { Component } from "react";
import People from "./People";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Just Some Random People</h1>
        </header>
        <div>
          <div className='form-container'>
            <form>
              <label>Search People</label>
              <input type="text" />
            </form>
          </div>
          <People />
        </div>
      </div>
    );
  }
}

export default App;
