import React from 'react';
import { IMatrix } from '../../App';
import { SGridItem } from './styles';

const GridItem: React.FunctionComponent<IMatrix> = ({ position, lit, letter }) => {
	return (
		<SGridItem position={position} lit={lit}>
			{letter}
		</SGridItem>
	);
};

export default GridItem;
