import React from 'react';

function CountryDropdown({ setCountry }) {
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div class="container1">
      <label htmlFor="country-select"> </label>
      <select id="country-select" onChange={handleCountryChange} style={{marginRight:'100px', width:'80px', backgroundColor:"#2b3035" , position:'relative' , top:'15px'}}>
        <option  style={{color:'black'}} value="In">India</option>
        <option value="Us">United States</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </select>
    </div>
  );
}

export default CountryDropdown;
