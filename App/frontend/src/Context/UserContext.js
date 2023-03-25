import { createContext,useContext,useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({children})=>{
    const navigate = useNavigate();

    const [user,setUser] = useState();
    
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setUser(userInfo);
        if(!userInfo){
            navigate('/');
        }
    },[navigate]);

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState=()=>{
    return useContext(UserContext);
}

export default UserProvider;