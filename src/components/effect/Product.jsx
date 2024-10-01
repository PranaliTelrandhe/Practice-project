import { useEffect,useState } from "react";
//global url server
//const PRODUCT_APT_URL="http://serverhostnameORserver_ip_address:PORT/resourcepath"
const PRODUCT_APT_URL="/database/product.json"
const Product = ()=> {
const [products,setProducts]= useState([])
useEffect(()=>{

//fecting data from backend server (simulation)
//ajex (asynhronous javascript nd xml) used to send http request to web server
//nd get http response from server

fetch( PRODUCT_APT_URL,{
    method:"GET",
    headers:{
        'Accept':'application/json'
    }
})
.then( response=>{
    if(response.ok)
        return response.json()
    else if(response.status=="404")
        return response.json()
    else
    throw Error(`server error ${response.status}`)
})
.then(data=> setProducts(data))
.catch(err=>console.error(err))

},[products]);

//rendering logic
return(
    <div>
        <table className="table">
            <thead><tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {products.map( p=>
                    <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.brand}</td>
                        <td>{p.price}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
)


}
export default Product;