import { useState,createContext } from "react"

import Component2 from "./Component2"
//globally context object and exort context object
export const MyContext=createContext()

const Component1 = ()=>{
    const [message,setMessage] =useState('')
return(
    <div className="border border-3 border-success rounded m-3 p-3">
        <h2>component 1</h2>
        <input type="text" placeholder="Enter message..."  value={message}
        onChange={e=>setMessage(e.target.value)}/>
     {/* <Component2 c2msg={message}/>*/} <Component2/>
     <MyContext.Provider value={message}></MyContext.Provider>
    </div>





)
}
export default Component1;


