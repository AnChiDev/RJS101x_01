import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import StaffList from './components/StaffListComponent';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <StaffList/>
      </div>
    );
  }
}

export default App;