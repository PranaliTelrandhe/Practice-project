import './AlertButton.css'
export default function AlertButton(){

    //event handler function to handle click event
    function handleClick(event){
        event.stopPropagation();
        alert("you click button:" + event.target);
    }
    return <button className='alert-btn' onClick={handleClick} >click me</button>

  /* return <button className='alert-btn' onClick={function handleClick()
    {
        alert("inline event handler")
    }
   }>click me</button>*/
  // return <button className="alert-btn" onClick={()=>alert("arrow function inline event handler")}>click here</button>
}
