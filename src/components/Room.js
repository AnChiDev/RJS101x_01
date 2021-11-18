import React from "react";
import {Link} from 'react-router-dom';
import {Card, CardText,BreadcrumbItem, Breadcrumb } from "reactstrap";

const Room =(props)=>{
    const rooms = props.rooms.map((room)=>{
        return(
            <div key ={room.id} className ="col-12">
                <Card>
                    <CardText>{room.name}</CardText>
                    <CardText>Số lượng nhân viên: {room.numberOfStaff}</CardText>
                </Card>
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to ="/home">Home</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className ="col-12">
                    <h5>Phòng Ban</h5>
                    <hr/>
                </div>
            </div>
                <div className="row">
                    {rooms}
                </div>  
        </div>
    );
}
export default Room;