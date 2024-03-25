import Card from "../../components/card/Card";
import { LoginPageContainer } from "./LoginPage.styled";
import Input from "../../components/input/Input";

function LogIn() {
  return (
    <LoginPageContainer>
      <Card>
        <form>
          <Input label="Username" />
          <Input label="Password" />
        </form>
      </Card>
    </LoginPageContainer>
  );
}

export default LogIn;
