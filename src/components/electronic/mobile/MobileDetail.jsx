
import { useParams,useNavigate } from "react-router-dom"
import mobiles from './Mobile_data'
import { useContext } from "react";
import { ShopContext } from "../../../App";
const MobileDetail = () =>{
const{addToCart}=useContext(ShopContext)
    const navigate = useNavigate();

    const {mbl_id} =useParams()
    const mobileObj =  mobiles.find(mbl=>mbl.id==mbl_id)
    return (
        <div className="d-flex justify-content-around">
            <div className="w-50">
                <img src={mobileObj.image} alt={mobileObj.name} style={{width:'300px',height:'400px'}}/>
            </div>
            
            <div className="d-flex flex-column justify-content-center w-100 gap-4">
                <div>
                <h2>{mobileObj.brand} {mobileObj.name}</h2>
                <h4>&#8377;{mobileObj.price.toFixed(2)}</h4></div>
                <div className="border">
<h3 className="text-center">specification details</h3>
<table className="table">
<tbody>
    <tr>
        <th>primary camera</th>
        <td>{mobileObj.specification.camera.primary}</td>
    </tr>
    <tr>
        <th>Front camera</th>
        <td>{mobileObj.specification.camera.front}</td>
    </tr>
    <tr>
        <th>Internal storage

        </th>
        <td> {mobileObj.specification.Storage}</td>
    </tr>
    <tr>
        <th>ram</th>
        <td>{mobileObj.specification.ram}</td>
    </tr>
</tbody>
</table>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={()=>{addToCart(mobileObj);
                      alert("item added to shopping cart")
                    }}>Add to card</button>
                    
                </div>
                <div>
                <button className="btn btn-outline-secondary" onClick={()=>navigate("/electronic/mobile")}>back to gallary</button>
                </div>
        </div></div>
    )
}

export default MobileDetail ;
