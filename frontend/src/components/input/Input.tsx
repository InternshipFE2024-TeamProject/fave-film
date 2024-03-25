import { Label } from "@mui/icons-material";
import { InputContainer, StyledInput, StyledLabel } from "./Input.styled";

interface InputProp {
  label: string;
}

function Input({ label }: InputProp) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="text" />
    </InputContainer>
  );
}

export default Input;
