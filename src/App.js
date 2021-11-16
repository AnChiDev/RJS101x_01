import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { STAFFS } from './shared/staffs';
import StaffList from './components/StaffListComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import { NUMBERCOLS } from './shared/numbercols';

var col = 0;
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      staffs : STAFFS,
      numbercols: NUMBERCOLS[0]
      }
  }
    onSelectedCol(){
      col = document.getElementById('number').value;
      this.setState({numbercols: NUMBERCOLS[col]})
    }

    render(){
      return (
          <div  className="App">
            <Header />
            <div className ="container">
              <div id="numberCols">        
                    <label htmlFor="number">Chọn số cột hiển thị:</label>
                    <select id="number" name="number" onChange={() => this.onSelectedCol()}>
                      <option value={0}>Mặc định</option>                    
                      <option value={3}>3 cột</option>
                      <option value={4}>4 cột</option>
                      <option value={6}>6 cột</option>
                    </select>      
              <StaffList staffs={this.state.staffs} numbercols={this.state.numbercols} />
              <h5>Bấm vào tên nhân viên để xem thông tin. </h5>
              </div>
             
             
              
          
            </div>
            <Footer/>
        </div>
      )
  }
}

export default App;
