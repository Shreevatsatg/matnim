import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

     const checkAuthStatus = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/me`, { withCredentials: true });
      setIsAuthenticated(true);
    } catch (er) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };
     useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
  <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, refreshAuth: checkAuthStatus }}>
  {children}
</AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);