import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Flowers from './components/Flowers';
import Person from './components/Person';

import Toolbar from './components/Toolbar';
import SampleForm from './components/SampleForm';
import Voter from './components/Voter';
import GroceryList from './components/Grocery/GroceryList';
import CityList from './components/CityList';
import Counter from './components/Counter';
import CountState from './components/state/CountState';
import ShopRouter from './router/ShopRouter';
import { useReducer ,createContext } from 'react';





// create global Context Object and export
export const ShopContext = createContext();


// global shopping cart reducer function
const cartReducer = (cart,action)=>{
switch(action.type){
case "ADD TO CART": return [...cart,action.item]
case "REMOVE":return cart.filter(cartItem=>cartItem!=action.item)
default :return cart;
}
} 

function App() {

  const [cart,setCart]= useReducer(cartReducer,[])

  //event handlers to handle shoppingcart
  const addToCart = (product)=>{
    setCart({type:"ADD TO CART",item:product})
  }
  const removeFromCart =cartItem=> setCart({type:"REMOVE",item:cartItem})

  return (
    <div>
<ShopContext.Provider value={{cart,addToCart,removeFromCart}}>
<ShopRouter/>

      </ShopContext.Provider>




      {/*<ShopRouter/>*/}

     {/* <h2>hello world! welcome to react learning</h2>
     <Counter/>
     <CountState/>
     <Toolbar/>
     <SampleForm/>
     <Greeting/>
     <Greeting a="10" b="rohan"/>
     <Greeting/>
     <Flowers/>
     <Person name="tanu kumar" gender="male" age="25"/>
     <Person name="sanju" age="23" gender="female"/>
     <Voter citizen={{name:"riya k",age:22}}/>
     <Voter citizen={{name:"raghav k",age:17}}/>
     <GroceryList/>
    <CityList/> */}
    
    </div>
  );
}

export default App;
