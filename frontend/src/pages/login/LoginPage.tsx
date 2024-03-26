import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_USER_BY_ID, LOGGED_USER } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";
import {
  FormTitle,
  LoginPageCard,
  LoginPageContainer,
  StyledForm,
} from "./LoginPage.styled";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { data: dataAdded } = useQuery(GET_USER_BY_ID(1));

  const [loginUser] = useMutation(LOGGED_USER);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await loginUser({
        variables: {
          email: username,
          password,
        },
      });
      console.log(response);

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
