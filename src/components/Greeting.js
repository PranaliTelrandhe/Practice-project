//iMPORT COMPonent level css file
import Flowers from './Flowers';
import './Greeting.css'

//user defined component in react
function Greeting(){
//rendering logic in jsx
return(
    <div>
 <h1 className="Greet">Greeting! Lets learn react component</h1>
 <Flowers/>
 </div>
)
}

export default Greeting;