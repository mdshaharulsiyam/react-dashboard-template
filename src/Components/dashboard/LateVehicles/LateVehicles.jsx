
import { FaRegClock } from "react-icons/fa6";
const LateVehicles = () => {
    return(
        <div>
            <div className="w-72 bg-white shadow-md border-b border-cyan-400 hover:z-0 hover:-pb-3 flex flex-col gap-3 rounded-xl py-5 px-10 group transition-all cursor-pointer">
           <div className="flex items-center gap-4">
            <div className="p-2 bg-cyan-200 rounded-lg">
            <FaRegClock className="text-cyan-400"  fontSize={20}/>
            </div>
            <h1 className="text-2xl font-medium text-gray-400">13</h1>
           </div>
           <h1 className="text-gray-500">Late vehicles</h1>
           <h1 className="text-xl text-gray-400">-2.5% <span className="text-sm">than lest week</span></h1>
        </div>
        <div className="w-72 bg-cyan-500 shadow-md hidden hover:flex hover:z-10 flex-col gap-3 rounded-xl py-5 px-10 group transition-all cursor-pointer">
           <div className="flex items-center gap-4">
            <div className="p-2 bg-cyan-200 rounded-lg">
            <FaRegClock className="text-cyan-400"  fontSize={20}/>
            </div>
            <h1 className="text-2xl font-medium text-gray-400">13</h1>
           </div>
           <h1 className="text-gray-500">Late vehicles</h1>
           <h1 className="text-xl text-gray-400">-2.5% <span className="text-sm">than lest week</span></h1>
        </div>
        </div>
    )
    }
    
    export default LateVehicles; 