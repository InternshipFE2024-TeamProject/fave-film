import { StyledCard } from "./Card.styled";

interface CardProps {
  children: React.ReactNode;
  variant?: "collection";
}

function Card({ children, variant }: CardProps) {
  return (
    <>
      <StyledCard variant={variant}>{children}</StyledCard>
    </>
  );
}

export default Card;
