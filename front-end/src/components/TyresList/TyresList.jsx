import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tyre = (props) => (
  <tr>
    <td>{props.tyre.name}</td>
    <td>{props.tyre.type}</td>
    <td>{props.tyre.brand}</td>
    <td>{props.tyre.description}</td>
    <td>{props.tyre.width}</td>
    <td>{props.tyre.profile}</td>
    <td>{props.tyre.rim}</td>
    <td>{props.tyre.speed}</td>
    <td>{props.tyre.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.tyre._id}>Edit</Link> |{" "}
      <Link
        to="/"
        onClick={() => {
          props.deleteTyre(props.tyre._id);
        }}
      >
        Delete
      </Link>
    </td>
  </tr>
);

export default class TyresList extends Component {
  constructor(props) {
    super(props);

    this.deleteTyre = this.deleteTyre.bind(this);

    this.state = { tyres: [] };
  }

  componentDidMount() {
    axios
      .get("/tyres/")
      .then((response) => {
        this.setState({ tyres: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTyre(id) {
    axios.delete("/tyres/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      tyres: this.state.tyres.filter((el) => el._id !== id),
    });
  }

  tyreList() {
    return this.state.tyres.map((currenttyre) => {
      return (
        <Tyre
          tyre={currenttyre}
          deleteTyre={this.deleteTyre}
          key={currenttyre._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Tyres from the database</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Brand</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Width</th>
              <th>Profile</th>
              <th>Rim</th>
              <th>Speed</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.tyreList()}</tbody>
        </table>
      </div>
    );
  }
}
