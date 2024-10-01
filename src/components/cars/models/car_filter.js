//front end bussiness logic


export function filterCarByBrand(cars,selectedBrand){
    //filtering cars objects as [per brand of car]
    const filteredCars = cars.filter( cr => cr.brand.includes(selectedBrand))
    return filteredCars;
}

//filtering unique brands
export const filterUniqueBrands = (cars)=>{

    //mapping car object to its brand
    const carBrands = cars.map(car=>car.brand);
    const uniqueBrands = carBrands.filter( (brand,index,array)=>array.indexOf(brand) === index );
    return uniqueBrands;
}
//filtering cars by suv
 export const filterCarsBySuv = (cars,selectedSuv)=>{
    if(selectedSuv=="SUV")
     return cars.filter( car=> cars.isSUV==true );
 if(selectedSuv=="Non-SUV")
    return cars.filter( car=>cars.isSUV==false);
 if(selectedSuv=="All")
    return cars;
 }
