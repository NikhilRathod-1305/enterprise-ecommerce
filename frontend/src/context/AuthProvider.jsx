import { useState, createContext } from "react";
import {jwtDecode} from 'jwt-decode';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(
        !!localStorage.getItem('token')
    );

    const [user, setUser] = useState(
        localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null);
    
    const login = (token) => {
        const decoded = jwtDecode(token);        
        localStorage.setItem('token', token);
        setAuthenticated(true);
        setUser(decoded);        
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user , login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
