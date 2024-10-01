import { useState } from "react";
import bikes from "../database/bike_data";



const Bikes= ()=>{
const [index,setIndex]=useState(0)
const [showMore,setShowMore] = useState(false)

const bike = bikes[index];

    return(
        
        <div className="d-flex flex-column align-items-center gap-3">
            Bikes showing {index+1} of {bikes.length}
            <div className="d-flex gap-4">
            <div>
                <img className="rounded" src={bike.image} alt={bike.model} style={{height:'300px',width:'400px'}}/>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <h2>
                    {bike.brand}{bike.model}
                </h2>
                <h4> &#8377;{bike.price}</h4>
                <button className="btn btn-outline-secondary" onClick={ ()=>setShowMore(!showMore) }>
                    {showMore ? "Hide More" :"show More"}
                    </button>
              {showMore &&  <ul className="list-group">
                    <li className="list-group-item"> {bike.specification.engine}</li>
                    <li className="list-group-item"> {bike.specification.power}</li>
                    <li className="list-group-item"> {bike.specification.mileage} </li>
                </ul>}
            </div></div>
            <div className="d-flex justify-content-center">
                <button title="Previous" disabled={index==0} className="btn btn-success rounded-start" onClick={()=>setIndex(index-1)} >&lt;</button>
                <button title="Next" disabled={index==bikes.length-1} className="rounded-end" onClick={ ()=>setIndex(index+1) }>&gt;</button>
            </div>
        </div>
      
    )



}

export default Bikes;