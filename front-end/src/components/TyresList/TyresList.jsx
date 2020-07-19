import React, { Component } from "react";
import styles from "./TyresList.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Button } from "reactstrap";
import SearchBar from "../SearchBar/SearchBar";

const Tyre = (props) => {
  return (
    <div className={styles.result}>
      <Card className="text-center" style={{ width: "20rem" }}>
        <CardImg
          top
          src={props.tyre.imgUrl}
          alt="..."
          style={{ width: "12rem", margin: "5px auto" }}
        />
        <CardBody>
          <CardTitle>{props.tyre.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">
            {props.tyre.brand}
          </CardSubtitle>
          <CardText>{props.tyre.description}</CardText>
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              href={"/edit/" + props.tyre._id}
              color="primary"
            >
              Edit
            </Button>
            <Button
              className={styles.button}
              href={"/edit/" + props.tyre._id}
              color="primary"
            >
              View
            </Button>
            <Button
              className={styles.button}
              href="/"
              color="danger"
              onClick={() => {
                props.deleteTyre(props.tyre._id);
              }}
            >
              Delete
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default class TyresList extends Component {
  constructor(props) {
    super(props);

    this.deleteTyre = this.deleteTyre.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);

    this.state = {
      loading: false,
      message: "",
      search: "",
      tyres: [],
    };
  }

  onChangeSearch(e) {
    e.preventDefault();

    this.setState({ search: e.target.value });
    this.setState({ loading: true });

    axios
      .get(`/tyres?brand={this.state.search}`)
      .then((response) => {
        this.setState({ tyres: response.data });
      })
      .then(this.setState({ loading: false }))
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/tyres/")
      .then((response) => {
        this.setState({ tyres: response.data });
      })
      .then(this.setState({ loading: false }))
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

  handleOnInputChange = (event) => {
    const query = event.target.value;
  };

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }

    const filteredTyres = this.state.tyres.filter((tyre) => {
      return tyre.brand.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <section>
        <h3>Tyres from the database</h3>

        <SearchBar onChangeSearch={this.onChangeSearch} />

        <div className={styles.results}>
          {filteredTyres.map((currenttyre) => {
            return (
              <Tyre
                tyre={currenttyre}
                deleteTyre={this.deleteTyre}
                key={currenttyre._id}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
