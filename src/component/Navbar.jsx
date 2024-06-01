import React, { Component } from 'react';
export default class Navbar extends Component {
  render() {
    let{search}=this.props
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"  style={{borderBottom:' #15141d'}}>
        <div className="container-fluid">
          <a className="navbar-brand title" href="/" style={{fontSize:"27px", fontFamily:"cursive"}}>NewsBook</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
          </div>
        </div>
      </nav>
    </div> 
    );                                                
  }
}
