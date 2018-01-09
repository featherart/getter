import React, { Component } from "react";
import People from "./People";
import MdSort from "react-icons/lib/md/sort";
import MdSearch from "react-icons/lib/md/search";
import Title from "./Title";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      sortBy: "",
      sortOrder: true
    };
  }

  handleSortBy(e) {
    this.setState({ sortBy: e.target.dataset["name"] });
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  submitSearch(e) {
    e.preventDefault();
  }

  render() {
    const { sortBy, sortOrder, searchTerm } = this.state;

    return (
      <div className="app">
        <header className="header">
          <Title />
        </header>
        <div className="container">
          <div className="controls-container">
            <button
              data-name="first"
              className={`sort-button ${sortBy === "first" ? "selected" : ""}`}
              onClick={e => this.handleSortBy(e)}
            >
              Sort First Name <MdSort />
            </button>
            <button
              data-name="last"
              className={`sort-button ${sortBy === "last" ? "selected" : ""}`}
              onClick={e => this.handleSortBy(e)}
            >
              Sort Last Name <MdSort />
            </button>
            <form>
              <label>Search People</label>
              <input
                type="text"
                value={"" || searchTerm}
                onChange={e => this.handleSearch(e)}
              />
              <button
                className="search-button"
                onClick={e => this.submitSearch(e)}
              >
                Search <MdSearch />
              </button>
            </form>
          </div>
          <People
            sortBy={sortBy}
            sortOrder={sortOrder}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    );
  }
}

export default App;
