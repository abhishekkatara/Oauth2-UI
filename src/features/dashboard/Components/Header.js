import React from 'react'


const Header = ({ tableManager, column,}) => {
    return (
        <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
  
                    <span className='thStyle' style={{marginLeft: 0}}>{column.label}</span>
  
        </div>
    )
 }

 export default Header;