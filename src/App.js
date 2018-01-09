import React, { Component } from "react";
import People from "./People";
import MdSort from "react-icons/lib/md/sort";
import MdSearch from "react-icons/lib/md/search";
import Title from "./Title";
import "./App.css";

class App extends Component {
  state = {
    sortBy: "",
    sortOrder: "true"
  };

  handleSortBy(e) {
    this.setState({ sortBy: e.target.dataset["name"] });
  }

  render() {
    const { sortBy, sortOrder } = this.state;

    return (
      <div className="app">
        <header className="header">
          <Title />
        </header>
        <div className="container">
          <div className="controls-container">
            <button
              data-name="first"
              className={`sort-button ${this.state.sortBy === "first"
                ? "selected"
                : ""}`}
              onClick={e => this.handleSortBy(e)}
            >
              Sort First Name <MdSort />
            </button>
            <button
              data-name="last"
              className={`sort-button ${this.state.sortBy === "last"
                ? "selected"
                : ""}`}
              onClick={e => this.handleSortBy(e)}
            >
              Sort Last Name <MdSort />
            </button>
            <form>
              <label>Search People</label>
              <input type="text" />
              <button className="search-button">
                Search <MdSearch />
              </button>
            </form>
          </div>
          <People sortBy={sortBy} sortOrder={sortOrder} />
        </div>
      </div>
    );
  }
}

export default App;
