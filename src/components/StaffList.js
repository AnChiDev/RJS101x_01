import React, {useState} from 'react';
import { Card, CardImg, CardTitle, Form, Row, Label, Input,Col, Button, ModalBody, Modal, ModalHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

const StaffList = ({staffs, updateState}) => {
  {/*Danh sách NV */}
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
    {/*state search và input name */}
        const [Name, setName] = useState("");
        const [Search, setSearch] = useState("");
        
      
    {/*Thực hiện tìm kiếm NV */}
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
      {/**state new staff */}
      const [modalOpen, setModalOpen] = useState(false);
      const [New, setNew] = useState({
        name: "",
        doB: "",
        startDate: "",
        department: "Sales",
        salaryScale: "",
        annualLeave: "",
        overTime: "",
      });





        return (
            <div className ="container" >
            {/**Hiển thị danh sách nv lên màn hình */}
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
                {/* Hiển thị nút thêm nhân viên mới*/}
                <div className ="row">
                <div className="col-md-6 mt-1" style={{ 'width' : '500px'}}>
                <Label  style={{ 'width' : '300px', 'font-weight':'bold'  }}> Thêm nhân viên </Label>
                <Button
                  className="btn btn-primary"
                  type ="submit"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  +
                </Button>

                </div>

                {/*Hiển thị input search nv */}
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

               {/*Hiển thị kết quả search NV */}
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
        </div>
        {/**Modal */}
        <div>
        <Modal
          isOpen={modalOpen}
          toggle={(modalOpen) => setModalOpen(!modalOpen)}
        >
          <ModalHeader
            isOpen={modalOpen}
            toggle={(modalOpen) => setModalOpen(!modalOpen)}
          >
            Thêm nhân viên
          </ModalHeader>
          <ModalBody>
            <Form
           
            >
              <Row className="mt-2">
                <Label htmlFor="name" md={3}>
                  Tên nhân viên:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={New.name}
                    onChange={(event) => {
                      return setNew({ ...New, name: event.target.value });
                    }}
                   
                  ></Input>
                  </Col>
                  </Row>
                  </Form>
                  </ModalBody>
           
              
                  </Modal>
                  </div>
        </div> 
        );
    }

export default StaffList;