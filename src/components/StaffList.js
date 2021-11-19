import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderMenuItem ({staff}) {
    return (
        <div>
        <Card >
            <Link to={`/menu/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
             
                <CardTitle className="text-center text-dark">{staff.name}</CardTitle>
               
            </Link>
        </Card>
        </div>
    );
}
    const StaffList = (props) => {

        const menu = props.staffs.map((staff) => {
            return (
                <div className="col-6 col-md-4 col-lg-2"  key={staff.id}>
                    <RenderMenuItem staff={staff} />
                </div>
            );
        });

        return (
            <div className ="container" >
                <div className="row">
                    <div className="col-12 mt-2 mb-2">
                        <h3>Danh sách nhân viên</h3>
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
                <div className =" mt-2 mb-2">
                 <h6> Bấm vào tên nhân viên để xem thông tin.</h6>
             </div>
            </div>
        );
    }

export default StaffList;