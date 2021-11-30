import React, {useState} from 'react';
import { Card, CardImg, CardTitle, Input, Label, Form, FormGroup, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

const StaffList = ({staffs, updateState}) => {
    const menu = staffs.map((staff) => {
        return (
            <div className="col-6 col-md-4 col-lg-2 mb-2"  key={staff.id}>
                    <Card >
            <Link to={`/menu/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardTitle className="text-center text-dark">{staff.name}</CardTitle>
               
            </Link>
            </Card>
                </div>
            );
        });
        const [Name, setName] = useState("");
        const [Search, setSearch] = useState ("");

        const handleSearch =(event,Name)=>{
            event.preventDefault(); 
            const name = Name.value;
            const X = staffs.filter((staff) => {
            if (name === "") {
              return staff;
            } else if (staff.name.toLowerCase().includes(name.toLowerCase())){
              return staff;
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
         setSearch(X);
          Name.value ="";

        };

        

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
                <div className="bg-light" style={{ 'width' : '500px'}}>
                <Form>
                <input 
                    type="text" 
                    placeholder="Nhập tên nhân viên cần tìm" 
                    id="name"
                    name="name"
                    style={{ 'width' : '300px' }}
                    ref ={(input) => {return setName(input);}}></input>
               <Button className ="btn btn-info" type ="submit" onClick={(event) => handleSearch(event, Name)}> Tìm </Button>
               </Form>
                </div>
                <div>
                  <p>
                    {Search === null
                      ? "* Bấm vào tên nhân viên để xem thông tin."
                      : Search .length === 0
                      ? ""
                      : "* Bấm vào tên nhân viên để xem thông tin."}
                  </p>
               </div>      
               <div>
                  {Search  === null
                    ? "*Không tìm thấy nhân viên nào"
                    : Search.length === 0
                    ? "*Không tìm thấy nhân viên nào"
                    : Search}
                </div>   
         </div> 
        );
    }

export default StaffList;