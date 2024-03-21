import { StyledButton } from "./Button.styled";

interface ButtonProps {
  type: "primary" | "text";
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
