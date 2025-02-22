import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  login: (navigate: (path: string) => void) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (navigate: (path: string) => void) => {
    setIsAuthenticated(true);
    navigate("/lesson-form");
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
