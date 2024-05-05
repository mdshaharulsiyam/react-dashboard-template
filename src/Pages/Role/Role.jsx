import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import RoleTable from "./RoleTable";


const Role = () => {
    const axiosSecure = useAxiosSecure();
    const [role, setRole] = useState(null);

    const faceData = async() => {
        const res = await axiosSecure('/api/roles-create');
        setRole(res.data)
    }

    useEffect(() => {
        faceData()
    }, [])

    
    return (
        <div>
        <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
            <h1 className="text-xl md:text-2xl text-900 font-bold ml-4 md:ml-0">Service List</h1>
        </div>
        <RoleTable />
    </div>
);
};

export default Role;