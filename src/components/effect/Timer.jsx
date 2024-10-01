import { useEffect, useState } from "react"

const Timer = () => {
const [count,setCount]= useState(0)
useEffect(()=>{

    setTimeout(()=>{
        setCount(count+1)
    },1000);
},[count]); //,[count] []one time empty
return(

    <div>
        <h1>Count {count} times</h1>
    </div>
)



}

export default Timer