import styled from "styled-components"

interface IStyledProps {
  lit: boolean;
  position: number[];
}

export const SGridItem = styled.div`
grid-column: ${(props: IStyledProps) => props.position[1]} / span 1;
grid-row:  ${(props: IStyledProps) => props.position[0]} / span 1;
color: white;
opacity: ${(props: IStyledProps) => props.lit ? "100%" : "20%"};
font-size: 30px;
font-family: 'Space Mono', monospace;
font-weight:  ${(props: IStyledProps) => props.lit ? "bold" : "regular"};
justify-self: center;

`;