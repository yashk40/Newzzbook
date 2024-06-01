import React, { Component } from 'react';
// import './index.css';
export default class Cards extends Component {
         
  render() {
        
      let { title, description,imageurl, newsurl} = this.props;
      return (
        <div className="card my-4 mx-2 hover-effect" style={{width: "100%", borderRadius:"22px", border:"auto" , backgroundColor:"#322e40" , color:"white", }} >
 <img  style={{height: "160px",width:"auto",borderTopRightRadius:"20px",borderTopLeftRadius:"19px"}}  src={imageurl?imageurl:"./public/default.png"} alt=''/> 
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} className="btn btn-primary" >Read more</a>
  </div>
</div>
    )
  }
}

