import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import {
  FormTitle,
  LoginPageCard,
  LoginPageContainer,
  StyledForm,
} from "./LoginPage.styled";
import Input from "../../components/input/Input";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "my@email.com" && password === "pass") {
      // navigate("/");
      console.log("LoggedIn");
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
