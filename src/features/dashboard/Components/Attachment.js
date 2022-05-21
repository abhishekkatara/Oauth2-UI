import React from "react";

const Attachment = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {

  var array=[];
  
  data.attachments.map((value)=>{
    array.push(<span className='attachmentTextStyle' style={{marginLeft: 10}}>{value}</span>)
  })
  
    return (
    <div className='rgt-cell-inner' style={{ alignItems: 'center', overflow: 'hidden',}}>
  {array}
  </div>)
  }

export default Attachment;