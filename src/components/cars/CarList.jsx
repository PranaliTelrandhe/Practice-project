//import database of cars
import { useState } from "react";
import cars from "../../database/car_data";
import CarItem from "./CarItem";
import { filterCarByBrand, filterCarsBySuv, filterUniqueBrands } from "./models/car_filter";
import BrandButton from "./BrandButton";
const CarList = ()=>{
    //declare steate variable
    const [filteredResult,setFilteredResult] = useState(cars)



 //event handler to handle select option change event
 const handleSuvChange = (e)=>{
    //calling bussiness logic form model
    const filteredSuvTypeCars =filterCarsBySuv(cars,e.target.value);
    setFilteredResult(filteredSuvTypeCars)
 }

const uniqueBrands = filterUniqueBrands(cars);
uniqueBrands.splice(0,0,"All")

return(
   <div className="d-flex gap-2 m-2">
        
        <div className="d-flex flex-column gap-2">
    

    { uniqueBrands.map( brand=><BrandButton key={brand} brandStyle={brand==="All"?"btn btn-outline-primary":"btn btn-outline-secondary"} onFilter={ brand=="All"? ()=>setFilteredResult(cars) 
        :()=>setFilteredResult(filterCarByBrand(cars,brand))}>
     {brand} </BrandButton>)}

</div>
        <div className="d-flex flex-column gap-2">
            <div>
                <select className="form-select"
                    onChange={handleSuvChange} >
            <option>All</option>
            <option>
                SUV
            </option>
            <option>Non-SUV</option>
            </select>
        </div>
            
        <div className="row gap-3">
            { filteredResult.map(cr=><div className="col" key={cr.model}>
                <CarItem car={cr}/>
                </div>) }
        </div>
        </div></div>
         )

}

export default CarList;