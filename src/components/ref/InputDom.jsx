import { useRef } from "react";

const InputDom =()=>{

const inputRef =useRef(null)

const handleClick =()=>{

    inputRef.current.focus();//manipulating dom using ref object
}
return(
    <div>
        <input ref={inputRef} type="text" placeholder="enter ur msg"/>
        <button onClick={handleClick}>click to focus</button>
    </div>
)




}
export default InputDom;