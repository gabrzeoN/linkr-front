import React, { createContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage.js';

export const UserContext = createContext();

export function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null);
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user) {
            location.pathname === '/' && navigate('/timeline');
        } else {
            navigate('/');
        }
    }, []);

    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData,
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;