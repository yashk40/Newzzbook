import React, { Component } from 'react';

export default class Nav2 extends Component {
  render() {
    return (
      <div className='sticky-top' style={{zIndex:'100'}}>
      <div className="scrollmenu" style={{backgroundColor:"#322e40", scrollbarColor:'#322e40   #322e40' , fontFamily:'poppins'}} >
  <a href="/business"style={{marginRight:'20px'}} >Business</a>
  <a href="/entertainment" style={{marginRight:'20px'}}>Entertainment</a>
  <a href="/health" style={{marginRight:'20px'}}>Health</a>
  <a href="/science" style={{marginRight:'20px'}}>Science</a>
  <a href="/Sports" style={{marginRight:'20px'}}>Sports</a>
  <a href="/Technology" style={{marginRight:'20px'}}>Technology</a>
</div>
</div>
    );
  }
}
