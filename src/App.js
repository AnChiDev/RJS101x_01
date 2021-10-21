import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { STAFFS } from './shared/staffs';
import StaffList from './components/StaffListComponent';
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      staffs : STAFFS,
    };
}

    render(){
      return (
          <div>
            <Header />
            <div>
            <StaffList staffs={this.state.staffs} />
           
            </div>
            <h5>Bấm vào tên nhân viên để xem thông tin. </h5>
          </div>
      )
  }
}

export default App;
