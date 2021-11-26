import React,{Component} from 'react';
import{Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem, CardHeader, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const basicSalary = 3000000;
const overTimeSalary = 200000;
//compare salary
function compare(a, b) {
  const salaryA = a.salaryScale * basicSalary + a.overTime * overTimeSalary;
  const salaryB = b.salaryScale * basicSalary + b.overTime * overTimeSalary;

  let comparison = 0;
  if (salaryA < salaryB) {
      comparison = -1;
    } else if (salaryA > salaryB) {
      comparison = 1;
    }
    return comparison;
  }

class Salary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: null
    }
  }

  setSort(sort){
    this.setState(
      {sort: sort}
    )
  }

  rendersalary(sort) {

    if (sort === 1) {
      return this.props.salary.sort(compare).map((staff) => {
        return (
          <div key={staff.id} className="col col-12 col-md-6 col-lg-4 p-2">
           <Card>
                <CardTitle className="text-center" >{staff.name}</CardTitle>
                <CardText> Mã nhân viên: {staff.id} </CardText>
                <CardText> Hệ số lương: {staff.salaryScale}</CardText>
                <CardText> Số giờ làm thêm: {staff.overTime}</CardText>
                <CardHeader  className="text-center" style ={{fontWeight: 'bold'}}> Lương: {Math.round(3000000 * `${staff.salaryScale}` + (`${staff.overTime}` * 200000))}</CardHeader>
                </Card>
          </div>
        );
      });
    } else if (sort === 2) {
      return this.props.salary.sort(compare).reverse().map((staff) => {
        return (
          <div key={staff.id} className="col col-12 col-md-6 col-lg-4 p-2">
            <Card>
                <CardTitle className="text-center" >{staff.name}</CardTitle>
                <CardText> Mã nhân viên: {staff.id} </CardText>
                <CardText> Hệ số lương: {staff.salaryScale}</CardText>
                <CardText> Số giờ làm thêm: {staff.overTime}</CardText>
                <CardHeader  className="text-center" style ={{fontWeight: 'bold'}}> Lương: {Math.round(3000000 * `${staff.salaryScale}` + (`${staff.overTime}` * 200000))}</CardHeader>
                </Card>
          </div>
        );
      });
    }
  };

  render() {

    const STAFFS = this.props.salary.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <Card>
            <CardTitle className="text-center" >{staff.name}</CardTitle>
            <CardText> Mã nhân viên: {staff.id} </CardText>
            <CardText> Hệ số lương: {staff.salaryScale}</CardText>
            <CardText> Số giờ làm thêm: {staff.overTime}</CardText>
            <CardHeader  className="text-center" style ={{fontWeight: 'bold'}}> Lương: {Math.round(3000000 * `${staff.salaryScale}` + (`${staff.overTime}` * 200000))}</CardHeader>
            </Card>
            </div>
        );
        });
    return (
        <div className ="container">
            <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to ="/StaffList">Home</Link></BreadcrumbItem>
                        </Breadcrumb>
                        <div className ="col-12">
                            <h5>Bảng Lương</h5>
                        </div>
                    </div>
                <Button className="btn btn-info ml-2" onClick={() => {this.setSort(1); }} > Lương: Thấp &#8594; cao </Button>
                <Button className="btn btn-info ml-2" onClick={() => {this.setSort(2); }} > Lương: Cao &#8594; thấp{" "}</Button>
                <div className="row">{ this.state.sort ? this.rendersalary(this.state.sort) : STAFFS}</div>
        </div>
        );
        }
        }
    export default Salary;