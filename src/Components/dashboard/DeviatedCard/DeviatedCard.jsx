
import { CiWarning } from "react-icons/ci";
const DeviatedCard = () => {
    return(
        <div className="w-72 bg-white shadow-md border-b border-red-400 hover:border-b-4 flex flex-col gap-3 rounded-xl py-5 px-10 group transition-all cursor-pointer">
           <div className="flex items-center gap-4">
            <div className="p-2 bg-red-300 rounded-lg">
            <CiWarning className="text-red-700
            " fontSize={20}/>
            </div>
            <h1 className="text-2xl font-medium text-gray-400">27</h1>
           </div>
           <h1 className="text-gray-500">Deviated from route</h1>
           <h1 className="text-xl text-gray-400">+4.3% <span className="text-sm">than lest week</span></h1>
        </div>
    )
    }
    
    export default DeviatedCard; 