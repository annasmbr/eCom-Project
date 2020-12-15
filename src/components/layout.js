import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <Navbar/>
      </div>
    );
  }
}

export default Layout;

//export default class App extends Component {
  //render() {
   // return (
    //  <div className='app'>
     //   <h1>DevCamp React Starter</h1>
     //   <h2>React Redux Router</h2>
     // </div>
    //);
  //}
//}
{/*{...this.props.children}*/}
//<h1>ecom</h1>