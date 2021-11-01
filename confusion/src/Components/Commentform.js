import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Button, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }
    handleSubmit(values) {
        console.log('This state is ' + JSON.stringify(values));
        alert('This state is ' + JSON.stringify(values));
        this.setState({isModalOpen: false});
    }

    render() {
        return (
            <div>               
                <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span>Submit Comment</Button>
                <Modal isOpen = {this.state.isModalOpen} toggle = { this.toggleModal } >
                    <ModalHeader toggle = { this.toggleModal} >Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values) } >
                            <Row className="form-group mb-2">                                
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Control.select model='.rating' name='rating' className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label htmlFor="author" md={3}>Your Name</Label>
                                <Control.text model=".author" id="author" name="author" 
                                    placeholder="Your Name"
                                    className='form-control'
                                    validators = {{
                                        required, minLength: minLength(4), maxLength: maxLength(15)
                                    }} />
                                <Errors 
                                    className='text-danger'
                                    model='.author'
                                    show='touched'
                                    messages = {{
                                        required: 'Required',
                                        minLength: 'Must be greater than 4 characters',
                                        maxLength: 'Must be less than or equal to 15 characters'
                                    }}
                                />
                            </Row>
                            <Row className="form-group mb-2">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" 
                                    rows='6' 
                                    className='form-control' />
                            </Row>
                            <Row className="form-group mb-2" md={4}>
                                <Button type='submit' color='primary'>
                                    Submit
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;