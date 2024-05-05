import DeviatedCard from "./DeviatedCard";
import ErrorCard from "./ErrorCard";
import LateVehicles from "./LateVehicles";
import VehicleCard from "./VehicleCard";

const Cards = () => {
return(
    <div className="flex justify-center items-center py-10 px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<VehicleCard/>
<ErrorCard/>
<DeviatedCard/>
<LateVehicles/>
       </div>
    </div>
)
}

export default Cards; 