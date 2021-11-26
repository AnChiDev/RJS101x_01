import React, {useState} from 'react';
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
                <div className="col-6 col-md-4 col-lg-2 mb-2"  key={staff.id}>
                    <RenderMenuItem staff={staff} />
                </div>
            );
        });

        const [search, setSearch] = useState("");

        const SEARCH = props.staffs.filter((staff) => {
            if (search === "") {
              return staff
            } else if (staff.name.toLowerCase().includes(search.toLowerCase())){
              return staff
            }
          }).map((staff) => {
            return (
              <Link
                to={`/menu/${staff.id}`}
                className="col col-6 col-md-4 col-lg-2 text-dark mb-2"
                style={{ textDecoration: "none" }}
              >
                <div key={staff.id}>
                    <div>{staff.name}</div>
                </div>
              </Link>
            );
          })

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
                        <div className="bg-light" style={{ 'width' : '300px'}}>
                <input 
                    type="text" 
                    placeholder="Tìm kiếm theo tên nhân viên" 
                    style={{ 'width' : '300px' }}
                    onChange={ (event) => setSearch(event.target.value) }></input>
                <div>
                    { search !== "" ? SEARCH : <div></div>}
                </div>
                </div>
                        <div className =" mt-2 mb-2">
                        <h6> Bấm vào tên nhân viên để xem thông tin.</h6>
                </div>
         </div> 
        );
    }

export default StaffList;