import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import CommentForm from './Commentform';

const renderDish = (dish) => {               
    if (dish) {
        return ( 
            <Card key={dish.id} className="col-12 col-md-5 m-1">
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } else {
        return (<div></div>)
    }
}

const renderComment = (comments) => {
    if (comments) {
        const cmts = comments.map((element) => {
            return(
                <CardBody key={element.id} className="wrap">
                    <CardText>{element.comment}</CardText>
                    <CardText>--{element.author}, {dateFormat(element.date, "longDate")}</CardText>
                </CardBody>
            )
        })
        return (
            <Card className="col-12 col-md-5 m-1">
                <CardTitle tag="h2">Comments</CardTitle>
                {cmts}
                <CommentForm />
            </Card>
        );
    } else {
        return (<div></div>)
    }
}

const DishDetail = (props) => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {renderDish(props.dish)}                          
                    {renderComment(props.comments)}
                </div>
            </div>
        );
    }else {
        return (<div></div>)
    }
}

export default DishDetail;