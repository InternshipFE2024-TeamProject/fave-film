import { StyledButton } from "./Button.styled";

interface ButtonProps {
  type: "primary" | "text" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
