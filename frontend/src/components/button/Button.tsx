import { StyledButton } from "./Button.styled";

interface ButtonProps {
  type: "primary" | "text" | "secondary" | "icon" | "tertiary";
  children: React.ReactNode;
  onClickFunction?: () => void;
}

const Button = ({ type, children, onClickFunction }: ButtonProps) => {
  return (
    <StyledButton onClick={onClickFunction} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
