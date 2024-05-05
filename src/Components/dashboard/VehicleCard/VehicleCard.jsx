
import { FaShuttleVan } from "react-icons/fa";

const VehicleCard = () => {
    return(
        <div className="w-72 bg-white shadow-md border-b border-indigo-400 hover:border-b-4 flex flex-col gap-3 rounded-xl py-5 px-10 group transition-all cursor-pointer">
           <div className="flex items-center gap-4">
            <div className="p-2 bg-indigo-200 rounded-lg">
            <FaShuttleVan color="#C874D9" fontSize={20}/>
            </div>
            <h1 className="text-2xl font-medium text-gray-400">42</h1>
           </div>
           <h1 className="text-gray-500">On Route vehicles</h1>
           <h1 className="text-xl text-gray-400">+18.2% <span className="text-sm">than lest week</span></h1>
        </div>
    )
    }
    
    export default VehicleCard; 