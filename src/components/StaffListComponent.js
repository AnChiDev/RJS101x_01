import React, {Component} from 'react';
import { Card,  Button, CardText, CardBody,
    CardTitle } from 'reactstrap';
import dateFormat from "dateformat";

class StaffList extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                selectedStaff: null
            }
        }
    
        onStaffSelected(staff) {
            this.setState({ selectedStaff: staff});
        }
    
        renderStaff(staff) {
            if (staff != null)
                return(
                    <Card>
                        <CardBody>
                          <CardTitle>{staff.name}</CardTitle>
                          <CardText>{staff.description}</CardText>
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
                  <div  className="col-12 col-md-5 mt-4">
                    <Card key={staff.id}
                      onClick={() => this.onStaffSelect(staff)}>
                     
                          <Button>{staff.name}</Button>
                          
                    </Card>
                  </div>
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                        {this.renderStaff(this.state.selectedStaff)}
                      </div>
                    </div>
                </div>
            );
        }
    }
    export default StaffList;