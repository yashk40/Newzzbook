import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Cards extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div
        className="card my-4 mx-1 hover-effect"
        style={{
          width: '100%',
          borderRadius: '22px',
          border: 'auto',
           backgroundColor: '#322e40',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
           
        }}
      >
        <span></span>
        <img  style={{ zIndex:'2'   , height: "97%",width:"97%",borderTopRightRadius:"20px",borderTopLeftRadius:"19px", marginTop:"1%" ,fontSize:"23px"      }}  src={imageurl} alt="Sorry Image was not working &#128532;"></img> 

        <div className="card-body "  >
          <h5 className="card-title">{title}</h5>
          <p   style={{
            marginRight:'30%'
          } }  className="card-text">{description}  </p>
          <a href={newsurl} className="btn-donate">Read more</a>
        </div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        />
      </div>
    );
  }
}
