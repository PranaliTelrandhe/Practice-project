const CarItem = ({car})=>{

    return(
        <div className="card" style={{width:'16rem'}} >
<img className="card-img-top" src={car.image} alt={car.model} style={{height:'250px'}} />
<div className="card-body">
    <h4 className="card-title">
        {car.brand} {car.model}
    </h4>
    <h4 className="card-subtitle">&#8377;{car.price}</h4>
    <h6 className="card-subtitle" style={{color:car.isSuv?'green':'brown'}}>SUV:{car.isSuv?"YES":"NO"}</h6>
</div>

        </div>
    )

}
export default CarItem;