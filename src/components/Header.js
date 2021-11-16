import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render(){
      return (
        <div className="header">                
        <Navbar dark expand="md" className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/stafflish">
                            <span className="fa fa-users fa-lg"></span> Nhân Viên
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/room">
                            <span className="fa fa-building fa-lg"></span> Phòng Ban
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/salary">
                            <span className="fa fa-medium fa-lg"></span> Bảng Lương
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
      );
    }
  }
  export default Header;