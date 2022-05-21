import React from "react";

const EmailHeader = ({ tableManager, column,}) => {

  return (
      <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
             <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{margin:10,}}/>
             <span className='thStyle' style={{marginLeft: 0}}>{column.label}</span>

      </div>
  )
}

export default EmailHeader;