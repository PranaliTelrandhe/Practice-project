//importing images
import Yamaha from "../images/Yamaha.webp"
import Royal_enfield from "../images/Royal_enfield.jpeg"
import Suzuki_Access_125 from "../images/Suzuki_Access_125.jpeg"
import tvs_jupitar from "../images/tvs_jupitar.jpeg"
import ktm_duke from "../images/ktm_duke.jpeg"

const bikes=[
    {
 model : "MT 15 V2",
 brand : "Yamaha",
 price : "1.74 lakh",
 image: Yamaha,
 specification:{
    engine:'155.cc',
    power:'14.1Nm',
    mileage:'56.87kmpl'
 }
},
 {
    model : "classic 350",
    brand : "Royal Enfield",
    price : "2.34 lakh",
    image: Royal_enfield,
    specification:{
       engine:'149.cc',
       power:'24.1Nm',
       mileage:'35.87kmpl'
    }
  
},
{
    model : "Activa 6G",
    brand : "Honda",
    price : "82684.00",
    image: Suzuki_Access_125,
    specification:{
       engine:'155.cc',
       power:'14.1Nm',
       mileage:'56.87kmpl'
    }
},
   {
    model : "Jupitar",
    brand : "TVS",
    price : "87684.00",
    image: tvs_jupitar,
    specification:{
       engine:'155.cc',
       power:'14.1Nm',
       mileage:'56.87kmpl'
    }
   },
   {
    model : "Duke 200",
    brand : "KTM",
    price : "1.74 lakh",
    image: ktm_duke,
    specification:{
       engine:'200.cc',
       power:'19.1Nm',
       mileage:'33kmpl'
    }
   },
]
export default bikes;