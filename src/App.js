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
            <div className ="container">
            <div className ="textfotter">
            <h5>Bấm vào tên nhân viên để xem thông tin. </h5>
            </div>
            <div id="numberCols">        
                  <label id="colorWhite" htmlFor="number">Chọn số cột hiển thị:</label>
                  <select id="number" name="number" onChange={() => this.onSelectedCol()}>
                    <option value={0}>Mặc định</option>                    
                    <option value={2}>2 cột</option>
                    <option value={3}>3 cột</option>
                    <option value={4}>4 cột</option>
                    <option value={6}>6 cột</option>
                  </select>      
                </div>              
            

            </div>
         
          </div>
      )
  }
}

export default App;
