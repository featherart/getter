import React, { Component } from 'react';
import People from './People';
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
        console.log('data', data.results)
        let results = data.results.map((pic) => {
          return(
            <div key={pic.cell}>
              <img src={pic.picture.large} alt={pic.name.first} />
            </div>
          )
        })
        this.setState({results : results})
      })
  }

  render() {
    const { results } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">People</h1>
        </header>
        <div>
          <People />
        </div>
      </div>
    );
  }
}

export default App;
