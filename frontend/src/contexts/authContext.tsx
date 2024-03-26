import { createContext, useState, useContext } from "react";
// import { GET_USER_BY_ID } from "../utils/queries";
// import { useQuery } from "@apollo/client";

// const { data: dataAdded } = useQuery(GET_USER_BY_ID(1));

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthContext = createContext({
//   data: dataAdded,
// });

interface AuthContextType {
  userId: number;
  name: string;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  userId: 1,
  name: "John Doe",
  isAuthenticated: true,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user] = useState({
    userId: 1,
    name: "John Doe",
    isAuthenticated: true,
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
