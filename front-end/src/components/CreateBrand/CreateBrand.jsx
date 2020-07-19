import React, { Component } from "react";
import styles from "./CreateBrand.module.scss";
import axios from "axios";

class CreateBrand extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const brand = {
      name: this.state.name,
    };

    console.log(brand);

    axios.post("/brands/add", brand).then((res) => console.log(res.data));

    this.setState({
      name: "",
    });
  }

  render() {
    return (
      <>
        <div>
          <h3>Create New Brand</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Brand:</label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create Brand"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateBrand;
