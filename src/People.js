import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      results: [],
=======
      results: []
>>>>>>> a76c7529d55c8e82c2df8586c86f28fb914df850
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(results => {
        return results.json();
      })
      .then(data => {
<<<<<<< HEAD
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
=======
        let results = data.results.map(pic => {
          return {
            id: pic.cell,
            imageUrl: pic.picture.large,
            firstName: pic.name.first,
            lastName: pic.name.last
          };
>>>>>>> a76c7529d55c8e82c2df8586c86f28fb914df850
        });
        this.setState({ results: results });
      });
  }

  render() {
    const { results } = this.state;
<<<<<<< HEAD
    return (
      <div className="people-container">
      { results }
=======
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
>>>>>>> a76c7529d55c8e82c2df8586c86f28fb914df850
      </div>
    );
  }
}
export default People;
