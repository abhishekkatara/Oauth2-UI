import React from "react";

const Dropdown = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
  return (
    <center>
      <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
           <select   name="cars" id="cars">
        <option value="Client">Client</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      </div>
      </center>
  )
}

export default Dropdown;