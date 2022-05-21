import React from "react";

const Lable = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
  var array=[];
  console.log(data)
  data.labels.map((value)=>{
    array.push(
      <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
       <i class="fa fa-plus fa-0.1x" onClick={()=>{console.log('ss')}} style={{color:'#8A8A8A',}}></i>
    <span className='descriptionTextStyle' style={{marginLeft: 10}}>{value}</span>
    </div>
    )
  })
  
    return (
    <div className='rgt-cell-inner' style={{ alignItems: 'center', overflow: 'hidden',}}>
  {array}
  </div>)
}

export default Lable;