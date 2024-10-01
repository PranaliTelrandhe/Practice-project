import { useState } from "react"

const CountState = () =>{
//declaring variable "count" nd intialling it to 0
//using react built-in hook "useState"
const [count,setCount] = useState(0);//number type state variable
const [bkColor,setBkColor] = useState('pink')//string type variable
const [toggleColor,setToggleColor] = useState(false);//boolean state variable

//event handler to handle button click event
const handleClick = ()=>{

    //update the state variable whenever user click the button 
    setCount(count+1);//it is also re-render the react component

    setToggleColor(!toggleColor)
    let isPink = toggleColor;
    if(isPink)
        setBkColor('pink')
    else
    
    setBkColor('cyan')

}
//rendering logic
return <button style={{backgroundColor:bkColor}} onClick={handleClick}>{count}</button>

}

export default CountState