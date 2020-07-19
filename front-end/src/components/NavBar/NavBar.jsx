import React from "react";
import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar expand="sm" color="success" light fixed={"top"}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand>Tyres for all budgets</NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <span className="navbar-toggler-bar navbar-kebab"></span>
              <span className="navbar-toggler-bar navbar-kebab"></span>
              <span className="navbar-toggler-bar navbar-kebab"></span>
            </NavbarToggler>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem active>
                <NavLink to="/">All tyres</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="add-tyre">Add tyre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="add-brand">Add brand</NavLink>
              </NavItem>
            </Nav>
            <Form inline className="ml-auto">
              <FormGroup className="no-border">
                <Input type="text" placeholder="Search" />
              </FormGroup>
              <Button color="neutral" icon round>
                <i className="nc-icon nc-zoom-split"></i>
              </Button>
            </Form>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

// import React from "react";
// import styles from "./NavBar.module.scss";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//         <Link to="/" className="navbar-brand">
//           Tyres Shop
//         </Link>
//         <div className="collpase navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li className="navbar-item">
//               <Link to="/" className="nav-link">
//                 Tyres
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/add-tyre" className="nav-link">
//                 Add Tyre
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/create-brand" className="nav-link">
//                 Create Brand
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

export default NavBar;
