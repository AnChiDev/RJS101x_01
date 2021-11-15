import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
      return (
          <Navbar className ="navbar" dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
            </div>
          </Navbar>
      )
    }
  export default Header;