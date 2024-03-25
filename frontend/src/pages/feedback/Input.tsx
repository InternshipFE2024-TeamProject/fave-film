import {
  InputContainer,
  StyledInput,
  StyledLabel,
} from "./FeedbackForm.styled";

interface InputProp {
  label: string;
  defaultValue?: string;
  disable: boolean;
}

const Input = ({ defaultValue, disable, label }: InputProp) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="text" defaultValue={defaultValue} disabled={disable} />
    </InputContainer>
  );
};

export default Input;
