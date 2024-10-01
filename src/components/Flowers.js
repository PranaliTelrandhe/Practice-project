import {Component} from 'react'
//as ES6 claSS REACT component

class Flowers extends Component{
    //override method
    render(){
        return(
            <ol style={{backgroundColor:'magenta',color:'red',fontSize:'20px'}}>
                <li>rose</li>
                <li>lotus</li>
                <li>jasmin</li>
                <li>tulip</li>
            </ol>
        );
    }
}
export default Flowers;