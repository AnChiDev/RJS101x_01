import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { STAFFS } from '../shared/staffs';
import StaffList from './StaffListComponent';
import Header from './Header';
import Footer from './Footer';


var col = 0;
class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      staffs : STAFFS,
      
      }
  }
    onSelectedCol(){
      col = document.getElementById('number').value;
    
    }

    render(){
      return (
          <div  className="App">
            <Header />
            <div className ="container">
            <h3>Nhân viên</h3>
            <StaffList staffs={this.state.staffs}  />
            <h5>Bấm vào tên nhân viên để xem thông tin. </h5>
            </div>
            <Footer/>
        </div>
      )
  }
}

export default Main;
