 import React from 'react'
    const MobileCard =({mobile})=>{

return (
<div className="card">
    <img className="card-img-top" src={mobile.image} alt={mobile.name} style={{height:'300px'}}/>
    <div className="card-body">
        <h3 className="card-title">{mobile.brand}{mobile.name}</h3>
        <h5 className="card-subtitle">&#8377;{mobile.price}</h5>
        <button className="btn btn-secondary w-100 mt-2 rounded-0 rounded-bottom">view details</button>
    </div>
</div>



)



}


export default MobileCard;




