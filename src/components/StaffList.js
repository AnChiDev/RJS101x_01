import React, { useState } from 'react';
import { Card, CardImg, CardTitle, Form, Row, Label, Input, Col, Button, ModalBody, Modal, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

const StaffList = ({ staffs, updateState }) => {
  {/*Danh sách NV dùng  map() để list ra một danh sách bằng cách viết lại render */ }
  const menu = staffs.map((staff) => {
    return (
      <div className="col-6 col-md-4 col-lg-2 mb-2" key={staff.id}>
        <Card >
          <Link to={`/menu/${staff.id}`} >
            <CardImg width="100%" src={staff.image} alt={staff.name} />
            <CardTitle className="text-center text-dark">{staff.name}</CardTitle>
          </Link>
        </Card>
      </div>
    );
  });
  //TÌM KIẾM NHÂN VIÊN
  {/*khai báo biến state mới Name, Search,
   useState() là một hook cho phép thêm React state vào function components
  xác định state của component đó, trong đó Name là biến state chứa giá trị state hiện tại
 còn setName() sẽ được sử dụng để cập nhật state...*/ }
  const [Name, setName] = useState("");
  const [Search, setSearch] = useState("");

  {/*Thực hiện tìm kiếm NV: phương thức filter trên mảng staffs truyền dữ liệu kiểm tra từng phần tử => show kết quả */ }
  const handleSearch = (event, Name) => {
    event.preventDefault();
    const name = Name.value;
    const X = staffs.filter((staff) => {
      if (name === "") {
        return staff;
      } else if (staff.name.toLowerCase().includes(name.toLowerCase())) {
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
    Name.value = "";
  };

//THÊM NHÂN VIÊN
  // khai báo state toggle add modal
  const [modalOpen, setModalOpen] = useState(false);
  // set state for new staff
  const [New, setNew] = useState({
    name: "",
    doB: "",
    startDate: "",
    department: "Sales",
    salaryScale: "",
    annualLeave: "",
    overTime: "",
  });
    // set state for touch. 
    const [touchName, settouchName] = useState(false);

    const [touchdoB, settouchdoB] = useState(false);
  
    const [touchstartDate, settouchstartDate] = useState(false);
  
    const [touchsalaryScale, settouchsalaryScale] = useState(false);
  
    const [touchannualLeave, settouchannualLeave] = useState(false);
  
    const [touchoverTime, settouchoverTime] = useState(false);
    
     // handle add submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if ( touchName && error.name != '' || touchdoB && error.doB != ''
      || touchstartDate && error.startDate != '' || touchsalaryScale && error.salaryScale != ''
      || touchannualLeave && error.annualLeave != '' || touchoverTime && error.overTime != ''
      || !touchName && error.name == '' || !touchdoB && error.doB == ''
      || !touchstartDate && error.startDate == '' || !touchsalaryScale && error.salaryScale == ''
      || !touchannualLeave && error.annualLeave == '' || !touchoverTime && error.overTime == '') {
      window.alert("Yêu cầu nhập đủ và chính xác thông tin");
      return;
    } else {
      console.log(error);
      const newStaff = {
        id: staffs.length,
        name: New.name,
        doB: New.doB,
        startDate: New.startDate,
        department: New.department,
        salaryScale: New.salaryScale,
        annualLeave: New.annualLeave,
        overTime: New.overTime,
        image: "/assets/images/alberto.png",
      };
  
      setNew({
        name: "",
        doB: "",
        startDate: "",
        department: "",
        salaryScale: "",
        annualLeave: "",
        overTime: "",
      });
  
      settouchName(false);
      settouchdoB(false);
      settouchstartDate(false);
      settouchsalaryScale(false);
      settouchannualLeave(false);
      settouchoverTime(false);
  
      setModalOpen(!modalOpen);
  
      updateState(newStaff);
    }
    setModalOpen(!modalOpen);
  };

  // form validation
  const validate = (
    name,
    doB,
    startDate,
    salaryScale,
    annualLeave,
    overTime
  ) => {
    const error = {
      name: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };

    if (touchName && name === "") {
      error.name = "Yêu cầu nhập";
    }

    if (touchName && name.length > 15) {
      error.name = "Nhập tên dưới 15 ký tự";
    }

    if (touchdoB && doB === "") {
      error.doB = "Yêu cầu nhập";
    }

    if (touchstartDate && startDate === "") {
      error.startDate = "Yêu cầu nhập";
    }

    if (touchsalaryScale && salaryScale === "") {
      error.salaryScale = "Yêu cầu nhập";
    }

    if (touchsalaryScale && isNaN(salaryScale)) {
      error.salaryScale = "Yêu cầu nhập số";
    }

    if (touchannualLeave && annualLeave === "") {
      error.annualLeave = "Yêu cầu nhập";
    }

    if (touchannualLeave && isNaN(annualLeave)) {
      error.annualLeave = "Yêu cầu nhập số";
    }

    if (touchoverTime && overTime === "") {
      error.overTime = "Yêu cầu nhập";
    }

    if (touchoverTime && isNaN(overTime)) {
      error.overTime = "Yêu cầu nhập số";
    }

    return error;
  };

  const error = validate(
    New.name,
    New.doB,
    New.startDate,
    New.salaryScale,
    New.annualLeave,
    New.overTime
  );


  //xóa dữ liệu đã nhập, cần f5 sau khi click button
  const click = () =>{
    localStorage.clear();
    }

  return (
    <div className="container" >
      {/**Hiển thị danh sách nv lên màn hình */}
      <div className="row">
        <div className="col-12 mt-2 mb-2">
          <h3>Danh sách nhân viên</h3>
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
      <div className=" mt-2 mb-2">
        <h6> Bấm vào tên nhân viên để xem thông tin.</h6>
      </div>
      {/* Hiển thị nút thêm nhân viên mới*/}
      <div className="row">
        <div className="col-md-6 mt-1" style={{ 'width': '500px' }}>
          <Label style={{ 'width': '300px', 'font-weight': 'bold' }}> Thêm nhân viên </Label>
          <div style ={{'float':'right','width': '200px'}}>
          <Button
            className="btn btn-primary"
            onClick={() => setModalOpen(!modalOpen)}
          >
            +
          </Button>
          </div>
        </div>
        
        {/*Hiển thị input search nv */}
        <div className="bg-light" style={{ 'width': '500px' }}>
          <Form>
            <input
              type="text"
              placeholder="Nhập tên nhân viên cần tìm"
              id="name"
              name="name"
              style={{ 'width': '300px' }}
              ref={(input) => { return setName(input); }}></input>
            <Button className="btn btn-info" type="submit" onClick={(event) => handleSearch(event, Name)}> Tìm </Button>
          </Form>

          {/*Hiển thị kết quả search NV */}
          <div>
            <p>
              {Search === null
                ? "* Bấm vào tên nhân viên để xem thông tin."
                : Search.length === 0
                  ? ""
                  : "* Bấm vào tên nhân viên để xem thông tin."}
            </p>
          </div>
          <div>
            {Search === null
              ? "*Không tìm thấy nhân viên nào"
              : Search.length === 0
                ? "*Không tìm thấy nhân viên nào"
                : Search}
          </div>
        </div>
        </div>
        {/**Xóa dữ liệu đã nhập */}
        <div>
        <button onClick = {click}>Xóa toàn bộ dữ liệu vừa nhập</button>
        </div>
         {/* Modal */}
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
              onSubmit={(values) => {
                handleSubmit(values);
              }}
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
                    onBlur={(touch) => {
                      return settouchName(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.name}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="doB" md={3}>
                  Ngày sinh:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    value={New.doB}
                    onChange={(event) => {
                      return setNew({ ...New, doB: event.target.value });
                    }}
                    onBlur={(touch) => {
                      return settouchdoB(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.doB}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="startDate" md={3}>
                  Ngày bắt đầu:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={New.startDate}
                    onChange={(event) => {
                      return setNew({ ...New, startDate: event.target.value });
                    }}
                    onBlur={(touch) => {
                      return settouchstartDate(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.startDate}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="department" md={3}>
                  Phòng ban:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    value={New.department}
                    onChange={(event) => {
                      return setNew({ ...New, department: event.target.value });
                    }}
                  >
                    <option>Sales</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                  <p className="text-danger">{error.department}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="salaryScale" md={3}>
                  Hệ số lương:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                    value={New.salaryScale}
                    onChange={(event) => {
                      return setNew({
                        ...New,
                        salaryScale: event.target.value,
                      });
                    }}
                    onBlur={(touch) => {
                      return settouchsalaryScale(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.salaryScale}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="annualLeave" md={3}>
                  Số ngày nghỉ phép còn lại:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                    value={New.annualLeave}
                    onChange={(event) => {
                      return setNew({
                        ...New,
                        annualLeave: event.target.value,
                      });
                    }}
                    onBlur={(touch) => {
                      return settouchannualLeave(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.annualLeave}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Label htmlFor="overTime" md={3}>
                  Số ngày làm thêm:{" "}
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    value={New.overTime}
                    onChange={(event) => {
                      return setNew({ ...New, overTime: event.target.value });
                    }}
                    onBlur={(touch) => {
                      return settouchoverTime(true);
                    }}
                  ></Input>
                  <p className="text-danger">{error.overTime}</p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={{ size: 3, offset: 3 }}>
                  <Button type="submit">Thêm</Button>
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