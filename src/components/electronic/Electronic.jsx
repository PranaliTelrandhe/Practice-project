import {Link,Outlet} from 'react-router-dom'

const Electronic =() => {
return(
    <div>
        <h1 className='text-bg-secondary text-center'>Electronic Section</h1>
        <nav style={{height:'40px'}} className='navbar navbar-expand-lg bg-primary' data-bs-theme="dark">
            <div className='container'>

                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="mobile">Mobile</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' to="laptop">Laptop</Link>
                    </li>
                </ul>
            </div>

        </nav>
        <Outlet/>
    </div>
)

}
export default Electronic