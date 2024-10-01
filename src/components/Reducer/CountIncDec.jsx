import { useReducer } from "react"


//globally create reducer funtion

function countReducer(state,action){
switch(action.type){
    case"INCREASE":return{...state,count:state.count+1}
    case"DECREASE":return{...state,count:state.count-1}
    case "INC BY AMT":return{...state,count:state.count+action.amount}
    case "DEC BY AMT":return{...state,count:state.count-action.amount}
    default: throw Error(`Invalid action ${action.type}`)
}
}
//React component
const CountIncDec = () => {
    const [state,dispatch]=useReducer(countReducer,{count:0})

    //event handlers
    const handleIncrement = () =>{
        dispatch({type:"INCREASE"})
    }
    const handleDecreament=()=>{
        dispatch({type:"DECREASE"})
    }
    const handleIncrementByAmount = (amt)=>{
        dispatch({type:"INC BY AMT",amount:amt})
    }
    const handleDecreamentByAmount= amt=> dispatch({type:"DEC BY AMT",amount:amt})
    //rendering logic
    return(
        <div>
            <button onClick={()=>handleDecreamentByAmount(5)}>- by 5</button>
            <button onClick={handleDecreament}>-</button>
            <span>{state.count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={()=>handleIncrementByAmount(10)}>+ by 10</button>
        </div>
    )
  return (
    <div>
      
    </div>
  )
}

export default CountIncDec