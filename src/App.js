import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { STAFFS, DEPARTMENTS } from './shared/staffs';
import StaffList from './components/StaffListComponent';
import Header from './components/Header'

class App extends Component {
    render(){
      return (
          <div>
            <Header />
         
          </div>
      )
  }
}

export default App;
