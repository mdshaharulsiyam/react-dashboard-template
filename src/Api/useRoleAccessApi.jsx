import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useRoleAccessApi = () => {
    const axiosSecure = useAxiosSecure();
    const [roleAccess, setRoleAccess] = useState(null);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axiosSecure('/api/roles-create')
        setRoleAccess(res.data.permissions)
        setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return [roleAccess, loading]
};

export default useRoleAccessApi;