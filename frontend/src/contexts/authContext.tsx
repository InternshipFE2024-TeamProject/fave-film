import { createContext, useState, useContext } from "react";

interface AuthContextType {
  name: string;
  picture: string;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  name: "John Doe",
  picture: "https://example.com/profile.jpg",
  isAuthenticated: false,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user] = useState({
    name: "John Doe",
    picture: "https://example.com/profile.jpg",
    isAuthenticated: false,
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
