import { Link } from "react-router-dom";
import mobiles from "./Mobile_data"
import MobileCard from "./MobileCard";
const MobileGallary = ()=>{
    const mobileCardList = mobiles.map(mbl=>

        <div className="col" key={mbl.id}> <Link title="view details" style={{textDecoration:'none'}} to={"detail/"+mbl.id}>
        <MobileCard mobile={mbl}/></Link></div>
    );
   return(
    <div className="row gap-3">
        {mobileCardList}
    </div>
   ) 
}
export default MobileGallary;