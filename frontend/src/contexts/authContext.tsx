import { createContext, useState, useContext } from "react";

interface AuthContextType {
  userId: number;
  name: string;
  picture: string;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  userId: 1,
  name: "John Doe",
  picture: "https://example.com/profile.jpg",
  isAuthenticated: true,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user] = useState({
    userId: 1,
    name: "John Doe",
    picture: "https://example.com/profile.jpg",
    isAuthenticated: true,
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
