import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(results => {
        return results.json();
      })
      .then(data => {
        // let results = data.results.sort((a, b) => {
        //   const { sortOrder } = this.props
        //   if (sortOrder) {
        //     if (a.name.last < b.name.last) return -1
        //     if (a.name.last > b.name.last) return 1
        //     return 0
        //   }
        //   else {
        //     if (a.name.last < b.name.last) return -1
        //     if (a.name.last > b.name.last) return 1
        //     return 0
        //   }
        //})
        let results = data.results.map(pic => {
          return (
            <div key={pic.cell} className='picture-container'>
              <img src={pic.picture.large} alt={pic.name.first} />
              <div className="person-name">
                {pic.name.first ? pic.name.first.toUpperCase() : ''} {pic.name.last ? pic.name.last.toUpperCase() : ''}
              </div>
            </div>
          );
        });
        this.setState({ results: results });
      });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="people-container">
      { results }
      </div>
    );
  }
}
export default People;
