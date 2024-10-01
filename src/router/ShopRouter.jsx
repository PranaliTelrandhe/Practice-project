import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopNavBar from './ShopNavBar';
import Greeting from '../components/Greeting';
import GroceryList from '../components/Grocery/GroceryList';
import CarList from '../components/cars/CarList';
import Bikes from '../components/cars/bikes/views/Bikes';
import LoginRegister from '../components/user/LoginRegister';
import ProfileForm from '../components/profile/ProfileForm';
import Electronic from '../components/electronic/Electronic';
import Mobile from '../components/electronic/mobile/Mobile';
import Laptop from '../components/electronic/laptop/Laptop';
import MobileGallery from '../components/electronic/mobile/MobileGallary';
import MobileDetail from '../components/electronic/mobile/MobileDetail';
import Component1 from '../components/context/Component1';
import ShoppingCart from '../components/shopping_cart/ShoppingCart';
import CountIncDec from '../components/Reducer/CountIncDec';
import EffectDemo from '../components/effect/EffectDemo';
import RefDemo from '../components/ref/RefDemo';
//router component of react
const ShopRouter = () => {
return(
<BrowserRouter>
<Routes>{/*root route*/}
<Route path='/' element={<ShopNavBar/> }>
{/*child route*/}
<Route index element={ <Greeting/> }/>
<Route path='/grocery' element={ <GroceryList/>}/>
<Route path='/car' element={ <CarList/> } />
<Route path='/bikes' element={ <Bikes/>} />
<Route path='/login-register' element={<LoginRegister/>}/>
<Route path='/profile' element={<ProfileForm/>}/>
<Route path='/electronic' element={<Electronic/>}>
{/*child routes of electronic route*/}
<Route path='mobile' element={<Mobile/>}>
{/*child routes*/}
<Route path='' element={<MobileGallery/>}/>
<Route path='detail/:mbl_id' element={<MobileDetail/>}/>
</Route>
<Route path='laptop' element={<Laptop/>}/>
</Route>
<Route path='context' element={<Component1/>}/>
<Route path='reducer' element={<CountIncDec/>}/>
<Route path='cart' element={<ShoppingCart/>}/>
<Route path='effect' element={<EffectDemo/>}/>
<Route path='ref' element={<RefDemo/>}/>
</Route>
</Routes>
</BrowserRouter>

);


}

export default ShopRouter