/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


export const UserContext = createContext(null)
const UserProvider = ({children}) => {
    const [userCall, setUserCall] = useState(false);
    const [user, setUser] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const auth = localStorage.getItem('token')
        if (auth) {
          const getUserInfo = async () => {
            try {
              const res = await axiosSecure('/api/profile')
              setUser(res.data.userData);
            } catch (error) {
              console.log(error);
            }
          }
          getUserInfo();
        }
      }, [axiosSecure, userCall])

    const userInfo = {
        userCall,
        setUserCall,
        user,
        setUser
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;