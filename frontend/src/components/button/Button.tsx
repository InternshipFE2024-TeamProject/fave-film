import { ButtonContainer } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <ButtonContainer>
      <button>{children}</button>
    </ButtonContainer>
  );
};

export default Button;
