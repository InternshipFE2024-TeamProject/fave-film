import { ButtonContainer, StyledButton } from "./Button.styled";

interface ButtonProps {
  type: "primary" | "text";
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <ButtonContainer>
      <StyledButton type={type}>{children}</StyledButton>
    </ButtonContainer>
  );
};

export default Button;
