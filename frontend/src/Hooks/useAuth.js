import { useEffect, useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsLoggedIn(true);
      }
    }, []);
  
    const login = (userData) => {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      localStorage.removeItem('user');
      setUser(null);
      setIsLoggedIn(false);
    };
  
    const register = (userData) => {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setIsLoggedIn(true);
    };
  
    return { user, isLoggedIn, login, logout, register };
  };
  
  export default useAuth;
  