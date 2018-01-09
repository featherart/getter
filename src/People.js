import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let results = data.results.map(pic => {
          return {
            id: pic.cell,
            imageUrl: pic.picture.large,
            firstName: pic.name.first,
            lastName: pic.name.last
          };
        });
        this.setState({ results: results });
      });
  }

  render() {
    const { results } = this.state;
    const { sortBy } = this.props;
    return (
      <div className="people-container">
        {results.sort((a, b) => {
          if (sortBy === 'first') {
            if (a.firstName < b.firstName) return -1
            if (a.firstName > b.firstName) return 1
            return 0
          } else {
            if (a.lastName < b.lastName) return -1
            if (a.lastName > b.lastName) return 1
            return 0
          }
        }).map(pic =>
          <div key={pic.id} className="picture-container">
            <img src={pic.imageUrl} alt={pic.firstName} />
            <div className="person-name">
              {pic.firstName ? pic.firstName.toUpperCase() : ""}{" "}
              {pic.lastName ? pic.lastName.toUpperCase() : ""}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default People;
