import styled from "styled-components"

export const SGrid = styled.section`
  width: 80%;
  max-width: 30em;
  max-height: 30em;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(9, 1fr);
	border: 1px solid rgba(255,255,255,0.3);
  border-radius: 2px;
  padding: .5em;
`;