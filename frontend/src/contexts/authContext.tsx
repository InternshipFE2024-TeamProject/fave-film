import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

interface LoggedUserData {
  userId: number;
  isAuthenticated: boolean;
}
interface AuthContextType {
  userData: LoggedUserData | null;
  setUserData: Dispatch<SetStateAction<LoggedUserData | null>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  userData: null,
  setUserData: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [userData, setUserData] = useState<LoggedUserData | null>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
