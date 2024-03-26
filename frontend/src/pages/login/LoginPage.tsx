import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGGED_USER } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";
import {
  FormTitle,
  LoginPageCard,
  LoginPageContainer,
  StyledForm,
} from "./LoginPage.styled";
import { useAuth } from "../../contexts/authContext";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [loginUser] = useMutation(LOGGED_USER);
  const { userData, setUserData } = useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await loginUser({
        variables: {
          email: username,
          password,
        },
      });

      // console.log(response);
      localStorage.setItem("userId", response.data.userMutation.loginUser.id);
      localStorage.setItem("isAuthenticated", "true");

      setUserData({
        userId: response.data.userMutation.loginUser.id,
        isAuthenticated: true,
      });

      console.log(userData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginPageCard>
        <Card>
          <div>
            <FormTitle>LogIn</FormTitle>
            <StyledForm onSubmit={handleLogin}>
              <Input
                label="Username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button type="submit">Login</button>
            </StyledForm>
          </div>
        </Card>
      </LoginPageCard>
    </LoginPageContainer>
  );
}

export default LogIn;
