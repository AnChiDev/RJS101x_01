import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';

class AddStaff extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isToggleModal: false,
            name: '',
            doB: '',
            startDate: '',
            department: 'Sale',
            salaryScale: 1,
            annualLeave: 0,
            overTime: 0
        }
        this.isToggleModal = this.isToggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);          
    }
    isToggleModal() {
        this.setState({isToggleModal: !this.state.isToggleModal})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return(
            <Col className='col-2'>
                <Button type='submit' onClick={this.isToggleModal} >
                    <span className="fa fa-plus" style={{width: '1.6rem'}} ></span>
                </Button>
                <Modal isOpen={this.state.isToggleModal} toggle={this.isToggleModal} >
                    <ModalHeader toggle={this.isToggleModal} >Thêm Nhân Viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className='row mb-2'>
                                <Label htmlFor="name" className='col-md-4 col-12' >Tên</Label>
                                <Col className='col-md-8 col-12'>
                                    <Input type="text" id="name" name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup className='row mb-2'>
                                <Label htmlFor="doB" className='col-md-4 col-12'>Ngày sinh</Label>
                                <Col className='col-md-8 col-12'>
                                    <Input type="date" name="doB" id='doB'
                                        value={this.state.doB}
                                        onChange={this.handleInputChange} />
                                
                                </Col>
                            </FormGroup>
                            <FormGroup className='row mb-2'>
                                <Label htmlFor="startDate" className='col-md-4 col-12'>Ngày vào công ty</Label>
                                <Col className='col-md-8 col-12'>
                                    <Input type="date" name="startDate" id='startDate'
                                        value={this.state.startDate}
                                        onChange={this.handleInputChange} />       
                                </Col>
                            </FormGroup>
                            <FormGroup className='row mb-2'>
                                <Label htmlFor="department" className='col-md-4 col-12'>Phòng ban</Label>
                                <Col className='col-md-8 col-12'>
                                    <Input type="select" name="department" id='department'
                                        value={this.state.department}
                                        onChange={this.handleInputChange} >
                                        <option >Sale</option>
                                        <option >HR</option>
                                        <option >Marketing</option>
                                        <option >IT</option>
                                        <option >Finance</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup className='row mb-2'>
                                <Label htmlFor="salaryScale" className='col-md-4 col-12'>Hệ số lương</Label>
                                <Col className='col-md-8 col-12'>
                                    <Input type="number" name="salaryScale" id='salaryScale' placeholder='1.0->3.0'
                                        value={this.state.salaryScale}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup className='row mb-2'>
                                <Label htmlFor="annualLeave" className='col-md-4 col-12'>Số ngày nghỉ còn lại</Label>
                                <Col className='col-md-8 col-12'>
                                    <Input type="number" name="annualLeave" id='annualLeave' placeholder='1.0' 
                                        value={this.state.annualLeave}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup className='row mb-2'>
                                <Label htmlFor="overTime" className='col-md-4 col-12'>Số ngày đã làm thêm</Label>
                                <Col className='col-md-8 col-12'>
                                    <Input type="number" name="overTime" id='overTime' placeholder='1.0' 
                                        value={this.state.overTime}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="submit" color="primary" className='offset-5'>Thêm</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Col>
        );
    }
}

export default AddStaff;