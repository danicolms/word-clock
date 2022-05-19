import styled, { keyframes } from "styled-components";

const gradientMovement = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
}
`;

export const SContainer = styled.div`
	width: 100%;
	height: 100%;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
    background: linear-gradient(270deg, #240243, #8A0D49, #D90000, #E95200, #0095AF);
    background-size: 400% 400%;
    animation: ${gradientMovement} 30s ease infinite;
    opacity: 80%;


`;

export const SSignatureContainer = styled.section`
	width: 100%;

	margin-bottom: 2em;
`
export const STitle = styled.h1`
	font-family: 'Yellowtail', cursive;
	opacity: 75%;
	margin: 0;
	font-size: 64px;
	color: black;
	user-select: none;
	text-align: center;
	line-height: 1;

`;
export const SSubtitle = styled.h5`
	font-family: 'IBM Plex Sans Thai Looped', sans-serif;
	opacity: 55%;
	margin: 0;
	font-size: 18px;
	color: black;
	user-select: none;
	text-align: center;
`;