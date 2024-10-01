import "./GroceryItem.css"
const GroceryItem = ({item})=>{

    let discountedPrice=0;
if(item.isDiscounted){
discountedPrice= item.price - (item.price * item.discount/100)

}
return(
    <div className="item-container"> 
        <h2>
            {item.name}
        </h2>
        <h3>&#8377;{ item.isDiscounted ? <span>{discountedPrice } <del style={{color:'red'}}>{item.price}</del></span>
        :item.price} per {item.unit}</h3>
    </div>

)


}
export default GroceryItem;