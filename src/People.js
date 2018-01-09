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
    return (
      <div className="people-container">
        {results.map(pic =>
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
