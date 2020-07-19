import React, { Component } from "react";
import styles from "./SearchComponent.module.scss";

class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>Search for tyres</h2>
          <label className="search-label" htmlFor="search"></label>
          <input
            type="text"
            value=""
            placeholder="Search"
            onChange={this.props.handleOnInputChange}
          />
        </div>
      </>
    );
  }
}

export default SearchComponent;
