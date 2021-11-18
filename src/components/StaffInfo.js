import React from "react";
import {Link} from 'react-router-dom';
import dateFormat from "dateformat";
import {Card, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";

const renderStaff = (staff)=>{
    let StaffBirth = dateFormat (staff.doB,"dd/mm/yyyy");
    let StaffStartDate = dateFormat (staff.startDate,"dd/mm/yyyy");

    return(
        <div className ="container">
            <div className ="row">
                <Card key ={staff.id} className ="col-12 col-md-4">
                    <CardImg src={staff.image} alt ={staff.name}/>
                </Card>
                <Card className ="col-12 col-md-8">
                    <CardTitle> Họ và tên: {staff.name}</CardTitle>
                    <CardText> Ngày sinh: {StaffBirth}</CardText>
                    <CardText> Ngày vào công ty: {StaffStartDate}</CardText>
                    <CardText> Phòng ban:{staff.department}</CardText>
                    <CardText>Số ngày nghỉ còn lại:{staff.anualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm:{staff.overTime}</CardText>
                </Card>
            </div>
        </div>
    );
}
    const SelectedStaff = (props) => {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/StaffList">Nhan Vien</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    {renderStaff(props.staff)}                   
                </div>
            </div>
        );    
    }
    
    export default SelectedStaff;