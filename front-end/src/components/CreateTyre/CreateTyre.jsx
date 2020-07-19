import React, { Component } from "react";
import axios from "axios";
import styles from "./CreateTyre.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateTyre extends Component {
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
    this.onChangeImgUrl = this.onChangeImgUrl.bind(this);
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
      imgUrl: "",
      brands: [],
    };
  }

  componentDidMount() {
    axios.get("/brands").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          brands: response.data.map((brand) => brand.name),
          name: response.data[0].name,
        });
      }
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

  onChangeImgUrl(e) {
    this.setState({
      imgUrl: e.target.value,
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
      imgUrl: this.state.imgUrl,
    };

    console.log(tyre);

    axios.post("/tyres/add", tyre).then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <>
        <div>
          <h3>Add New Tyre</h3>
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
                onChange={this.onChangeType}
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
              <label htmlFor="speed">Image URL:</label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.imgUrl}
                onChange={this.onChangeImgUrl}
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
                value="Create Tyre"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateTyre;
