const Counter = ()=>{
//local variable
let count = 0;

//event handler to handle click event

const handleClick = ()=>{
    count = count + 1;
    console.log(count); //prints in browser console
}
//rendering logic jsx code
return(
    <button onClick={handleClick}>{count}</button>
)

}

export default Counter;