import AlertButton from "./AlertButton";

const Toolbar =()=>{

    const handleClick=()=>{
        alert("you clicked toolbar")
    }

    //returing logic of toolbar component
    return(
        <div onClick={handleClick} style={{backgroundColor:'pink'}}>
            <AlertButton/>
        </div>
    );
}

export default Toolbar