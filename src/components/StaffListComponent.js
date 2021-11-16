import React, {Component} from 'react';
import { Card,  Button, CardText, CardBody, CardImg, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";

class StaffList extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                selectedStaff: null
            }
        }
    
        onSelectedStaff(staff) {
            this.setState({ selectedStaff: staff});
        }
        onResetState() {
            this.setState({selectedStaff: null});
        }
        renderSelectedStaff(staff) {
            if (staff != null)
                return(
                    <Card className="col-12">
                        <CardBody>
                        <CardTitle tag="h5">Họ và tên:{staff.name}</CardTitle>

                        {/* Format date to more easy-to-read date format */}
                        <CardText>
                            Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                        </CardText>
                        <CardText>
                            Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                        </CardText>

                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
    
        render() {
            const menu = this.props.staffs.map((staff) => {
                return (
                  <Card key={staff.id} className="col-2" onClick={() => this.onSelectedStaff(staff)}>
                  <CardImg top src={staff.image} alt={staff.name}/>
                          <Button>{staff.name}</Button>
                   </Card>
                  
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                        {this.renderSelectedStaff(this.state.selectedStaff)}
                    </div>
                </div>
            );
        }
    }
    export default StaffList;