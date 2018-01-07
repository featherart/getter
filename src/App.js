import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=25')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log('data', data)
        let results = data.results.map((pic) => {
          return(
            <div key={pic.results}>
              <img src={pic.picture.large} />
            </div>
          )
        })
        this.setState({results : results})
      })
  }

  render() {
    const { results } = this.state
    console.log(results)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">People</h1>
        </header>
        <div>{results}<img src="https://randomuser.me/api/portraits/thumb/women/16.jpg" /></div>
      </div>
    );
  }
}

export default App;
