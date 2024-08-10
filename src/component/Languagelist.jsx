import { OutlinedInput } from '@mui/material';
import React from 'react';

function CountryDropdown({ setlang }) {
  const handlelangChange = (event) => {
    setlang(event.target.value);
  };

  return (
    <div class="container1" style={{border:"none"}}>
      <label htmlFor="country-select" ></label>
      <select id="country-select" onChange={handlelangChange} style={{backgroundColor:'#2b3035'   , position:'relative' , top:'15px'    }} >
        <option value="en">English</option>
        <option value="Hi">hindi</option>
        <option value="bn">Bengali</option>
        <option value="mr">Marathi</option>
        <option value="ta">Tamil</option>
      </select>
    </div>
  );
} 

export default CountryDropdown;
