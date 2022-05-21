import React from "react";

const Description = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
  var array=[];
  
  data.description.map((value)=>{
    array.push(<span className='descriptionTextStyle' style={{marginLeft: 10}}>{value}</span>)
  })
  
    return (
    <div className='rgt-cell-inner' style={{ alignItems: 'center', overflow: 'hidden',}}>
  {array}
  </div>)
  }

export default Description;