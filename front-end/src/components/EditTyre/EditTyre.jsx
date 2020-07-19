import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditTyre extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeWidth = this.onChangeWidth.bind(this);
    this.onChangeProfile = this.onChangeProfile.bind(this);
    this.onChangeRim = this.onChangeRim.bind(this);
    this.onChangeSpeed = this.onChangeSpeed.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      type: "",
      brand: "",
      description: "",
      width: 0,
      profile: 0,
      rim: 0,
      speed: "",
      date: new Date(),
      brands: [],
    };
  }

  componentDidMount() {
    axios
      .get("/tyres/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          type: response.data.type,
          brand: response.data.brand,
          description: response.data.description,
          width: response.data.width,
          profile: response.data.profile,
          rim: response.data.rim,
          speed: response.data.speed,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/brands")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            brands: response.data.map((brand) => brand.name),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeWidth(e) {
    this.setState({
      width: e.target.value,
    });
  }

  onChangeProfile(e) {
    this.setState({
      profile: e.target.value,
    });
  }

  onChangeRim(e) {
    this.setState({
      rim: e.target.value,
    });
  }

  onChangeSpeed(e) {
    this.setState({
      speed: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const tyre = {
      name: this.state.name,
      type: this.state.type,
      brand: this.state.brand,
      description: this.state.description,
      width: this.state.width,
      profile: this.state.profile,
      rim: this.state.rim,
      speed: this.state.speed,
      date: this.state.date,
    };

    console.log(tyre);

    axios
      .post("/tyres/update/" + this.props.match.params.id, tyre)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Tyre Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <select
              useref="userInput"
              required
              className="form-control"
              value={this.state.brand}
              onChange={this.onChangeBrand}
            >
              {this.state.brands.map(function (brand) {
                return (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.width}
              onChange={this.onChangeWidth}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profile">Profile:</label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.profile}
              onChange={this.onChangeProfile}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rim">Rim:</label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.rim}
              onChange={this.onChangeRim}
            />
          </div>
          <div className="form-group">
            <label htmlFor="speed">Speed (letters from H to Z):</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.speed}
              onChange={this.onChangeSpeed}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Tyre Details"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
