import React from 'react';
import { IMatrix } from '../../App';
import { SGridItem } from './styles';
import Fade from 'react-reveal/Fade';
const GridItem: React.FunctionComponent<IMatrix> = ({ position, lit, letter }) => {
	return (
		<Fade delay={300} duration={1500}>
			<SGridItem position={position} lit={lit}>
				{letter}
			</SGridItem>
		</Fade>
	);
};

export default GridItem;
