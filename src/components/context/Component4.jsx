import { useContext } from "react"
import {MyContext} from './Component1'


//const Component4=({c4msg})=>{
  const Component4  =()=> {
    //child component uses hook usecontext to subscribe to the context obj
    //and read the value stored in context obj
    const message= useContext(MyContext)
return(


    <div className="border border-3 border-primary rounded m-3 p-3">
    <h2>component 4</h2>
    <h4>{message}</h4>
</div>


)



}
export default Component4


