import React, { Component } from "react";
import People from "./People";
import TiGroupOutline from "react-icons/lib/ti/group-outline";
import MdSort from "react-icons/lib/md/sort";
import MdSearch from "react-icons/lib/md/search";
import "./App.css";

class App extends Component {
  state = {
    sortBy: "",
    sortOrder: "true"
  };

  handleSortBy(e) {
    this.setState({sortBy: e.target.dataset["name"]});
  }

  render() {
    const { sortBy, sortOrder } = this.state;

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">
            <TiGroupOutline className="app-icon" />Just Some Random People
          </h1>
        </header>
        <div className="container">
          <div className="controls-container">
            <button
              data-name="first"
              className="sort-button"
              onClick={e => this.handleSortBy(e)}
            >
              Sort First Name <MdSort />
            </button>
            <button
              data-name="last"
              className="sort-button"
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
