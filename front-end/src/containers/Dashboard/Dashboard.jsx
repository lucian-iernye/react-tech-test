import React from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import TyresList from "../../components/TyresList";
import EditTyre from "../../components/EditTyre";
import CreateTyre from "../../components/CreateTyre";
import CreateBrand from "../../components/CreateBrand";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Router>
        <div className="container">
          <NavBar />
          <br />
          <Route path="/" exact component={TyresList} />
          <Route path="/edit/:id" component={EditTyre} />
          <Route path="/add-tyre" component={CreateTyre} />
          <Route path="/create-brand" component={CreateBrand} />
        </div>
      </Router>
    </>
  );
};

export default Dashboard;
