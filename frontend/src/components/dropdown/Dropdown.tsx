import { useEffect, useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from "./Dropdown.styled";
import { MovieGenres } from "../../utils/enums";

const Dropdown = ({ addFilter, reset }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    console.log({ selectedOption });
    addFilter(selectedOption);
  }, [selectedOption]);

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling} isOpen={isOpen}>
          <span>
            {reset ? <p>Genres</p> : <p>{selectedOption || "Genres"}</p>}
          </span>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {Object.values(MovieGenres).map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default Dropdown;
