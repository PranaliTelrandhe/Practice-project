import {Link,Outlet} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ShopContext } from '../App';
import { useContext } from 'react';

const ShopNavBar = () => {
const {cart}= useContext(ShopContext)

return(
<div>
    <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme="dark">
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link className='nav-link' to="/"><FaHome/></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/grocery">grocery</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/car">cars</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/bikes">bikes</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/electronic">electronic</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/context">context</Link>
            </li>
            <li className='nav-item'>
        <Link className='nav-link' to="/reducer">Count-Reducer</Link>
    </li>
    <li className='nav-item'>
        <Link className='nav-link' to="/effect">Effect-Demo</Link>
    </li>
    <li className='nav-item'>
        <Link className='nav-link' to="/ref">Ref-Demo</Link>
    </li>



            <li className='nav-item'>
                <Link className='nav-link' to="/profile">Profile</Link>
            </li>
            
        </ul>
        <ul className='navbar-nav ms-auto'>
        <li className='nav-item' >
                <Link className='nav-link' to="/login-register">login or Register <FaUser/></Link>
            </li>
        </ul>

        <li className='nav-item me-3'>
        <Link  title="view cart" className='nav-link position-relative' to="/cart"><FaCartShopping size={24}/><span className='badge 
        rounded-circle bg-success
        position-absolute top-0 me-3'>{cart.lenght}</span> </Link>
    </li>

    </nav>
    <Outlet/>

</div>
);
}
export default ShopNavBar;