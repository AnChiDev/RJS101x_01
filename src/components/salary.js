import React from 'react';
import{Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem, CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom';

const Salary = (props) =>{
    const salary = props.salary.map((staff) => {
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
                <div className="row">
                    {salary}
                </div>  
   </div>
);
}
export default Salary;