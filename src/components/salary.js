import React,{Component} from 'react';
import{Card, CardText, CardTitle, Breadcrumb, BreadcumbItem} from 'react-router-dom';

const basicSalary = 3000000;
const overTimeSalary = 200000;

class Salary extends Component {
 constructor (props){
     super (props);
     this.state={
         sort: null
     }
 }
 setSort(sort){
     this.setState(
         {sort:sort}
     )
 }
}
export default Salary;