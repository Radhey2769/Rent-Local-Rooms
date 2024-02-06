import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))

    );

    const [loggedIn, setloggedIn] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setloggedIn(false);
        navigate('/login');
    }





    return (
        <AppContext.Provider value={{ loggedIn, setloggedIn, logout }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;
