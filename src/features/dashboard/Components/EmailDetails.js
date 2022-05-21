import React from "react";


const EmailDetails = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
  return (
      <div className='emailDetailSection'>
          <p class='emailHeaderText' >{"XXXXXXX/XXXX"}</p>
          <p class='clientNameMasterNameCss' >{"Client Name_Matter Name"}</p>
          <p class='emailIdCss' >{"test@gmail.com at Mar 22, 8:45 PM"}</p>
      </div>
  )
}

export default EmailDetails;