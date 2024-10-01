import { useRef } from "react";


const CountRef = ()=>{
    const refObj=useRef(0)
    //event handle
    const handleClick =()=>{
    refObj.current =refObj.current + 1;
    console.log(refObj.current)
    }
return(
    <div>
        <button onClick={handleClick}>{refObj.current}
    
        </button>
    </div>
)



}
export default CountRef;