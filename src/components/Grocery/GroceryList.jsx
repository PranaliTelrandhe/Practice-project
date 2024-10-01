import GroceryItem from "./GroceryItem";

const GroceryList = ()=>{

return(
    <div>
        <GroceryItem item={{name:"sugar",price:50,unit:"kg",isDiscounted:true,discount:5}}/>
        <GroceryItem item={{name:"red label tea",price:150,unit:"250gm",isDicsounted:false,discount:0}}/>
    </div>
)
}

export default GroceryList;