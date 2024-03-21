import { ButtonContainer, TextButton, PrimaryButon } from "./Button.styled";

interface ButtonProps {
  type: "primary" | "text";
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <ButtonContainer>
      {type === "text" && <TextButton>{children}</TextButton>}
      {type === "primary" && <PrimaryButon>{children}</PrimaryButon>}
    </ButtonContainer>
  );
};

export default Button;
