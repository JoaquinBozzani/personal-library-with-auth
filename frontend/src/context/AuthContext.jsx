import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

function getStorage(rememberMe) {
  return rememberMe ? localStorage : sessionStorage;
}

export function AuthProvider({ children }) {
  const [rememberMe, setRememberMe] = useState(() => {
    const stored = localStorage.getItem('rememberMe');
    return stored === null ? true : stored === 'true';
  });
  const [user, setUser] = useState(() => {
    const storage = localStorage.getItem('rememberMe') === 'false' ? sessionStorage : localStorage;
    const storedUser = storage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(() => {
    const storage = localStorage.getItem('rememberMe') === 'false' ? sessionStorage : localStorage;
    return storage.getItem('token');
  });

  useEffect(() => {
    localStorage.setItem('rememberMe', rememberMe);
    const storage = getStorage(rememberMe);
    if (user && token) {
      storage.setItem('user', JSON.stringify(user));
      storage.setItem('token', token);
    } else {
      storage.removeItem('user');
      storage.removeItem('token');
    }
    // Remove from the other storage
    const otherStorage = rememberMe ? sessionStorage : localStorage;
    otherStorage.removeItem('user');
    otherStorage.removeItem('token');
  }, [user, token, rememberMe]);

  const login = (userData, tokenData, remember = rememberMe) => {
    setRememberMe(remember);
    setUser(userData);
    setToken(tokenData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, rememberMe, setRememberMe }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 