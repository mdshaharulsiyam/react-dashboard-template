import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    // const token = localStorage.getItem('token');
    const token = "";
    const navigate = useNavigate();

    useEffect(() =>  {
        if(!token) {
            console.log('object');
            return navigate('/login') 
        }
    }, [navigate])

    return children
};

export default PrivetRoute;