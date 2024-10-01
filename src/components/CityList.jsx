import CityItem from "./CityItem"

const cities = ["pune","bengular","hydrabad","chennai","patna"]

const CityList = ()=>{
//transforming array of data into array of react component
const cityItemList = cities.map ( ct => < CityItem key={ct} city={ct} /> )

//fliter the list of cities
const filteredListBeginWithP= cities.filter( city=>city.startsWith("P"))
//map filtered list of data into list of react component
const cityItemPList=
filteredListBeginWithP.map( city=> <CityItem key={city} city={city}/>)

//rendering
return(
    <>
    <ol>
    {cityItemList}</ol>
    <ol>
        {cityItemPList}
    </ol>
    </>
)


}

export default CityList