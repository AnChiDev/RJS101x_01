import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardTitle, CardText,BreadcrumbItem, Breadcrumb } from 'reactstrap';


const Room = (props) => {
    const rooms = props.rooms.map((room) => {
        return(
            <div key={room.id} className="col col-12 col-md-6 col-lg-4 mb-3">
            <Card tag="li" className="mt-2 p-1">
              <CardTitle>{room.name}</CardTitle>
              <CardText>Số lượng nhân viên: {room.numberOfStaff} </CardText>
            </Card>
          </div>
      );
    });
    return(
        <div className="container">
            <Breadcrumb className ="m-1">
                <BreadcrumbItem><Link to ="/StaffList">Home</Link></BreadcrumbItem>
            </Breadcrumb>
            <h5 >Phòng Ban</h5>
            <div className ="row mt-4 mb-5">
            {rooms}
            </div>
        </div>
    );
}
export default Room;