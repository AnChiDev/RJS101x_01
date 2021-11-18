import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import StaffList from './StaffList';
import StaffInfo from './StaffInfo';
import Header from './Header';
import Footer from './Footer';
import Room from './Room';
import Salary from './salary';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      staffs : STAFFS,
      departments : DEPARTMENTS,
      staffSelected: null,
      };
  }
  onStaffSelected(staffId){
    this.setState({staffSelected:staffId});
  }
    render(){
      const StaffWithId = ({match})=>{
        return(
          <StaffInfo
          staffSelected={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.id, 10)
            )[0]
          }
          department={this.state.departments}
        />
      );
    };
      return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/StaffList" component={() => <StaffList staffs={this.state.staffs} 
          departments={this.state.departments}
          onClick={(staffId) => this.onStaffSelected(staffId)}
          />} />
          <Route path='/menu/:staffId' component={StaffWithId} />
          <Route exact path='/room' component={() => <Room rooms={this.state.departments} />} />
          <Route exact path='/salary' component={() => <Salary staffs={this.state.staffs}/>} /> 
        </Switch>
        <Footer /> 
      </div>
    );
  }
}

export default Main;
