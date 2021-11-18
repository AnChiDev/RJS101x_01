import React from 'react';
import { Card, CardImg,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderMenuItem ({staff, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
             
                    <CardTitle>{staff.name}</CardTitle>
               
            </Link>
        </Card>
    );
}
    const StaffList = (props) => {

        const menu = props.staffs.map((staff) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={staff.id}>
                    <RenderMenuItem dish={staff} />
                </div>
            );
        });

        return (
            <div >
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Danh sách nhân viên</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default StaffList;