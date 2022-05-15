import React, { useEffect, useState } from 'react';
import Grid from './components/Grid';
import GridItem from './components/GridItem';
import { getCurrentTimePositions } from '@danicolms/word-clock-utils';
import { SContainer, SSignatureContainer, SSubtitle, STitle } from './App.styles';

export interface IMatrix {
	position: number[];
	lit: boolean;
	letter: string;
}

const defaultMatrix: IMatrix[] = [
	{ letter: 'E', lit: false, position: [ 0, 0 ] },
	{ letter: 'S', lit: false, position: [ 0, 1 ] },
	{ letter: 'O', lit: false, position: [ 0, 2 ] },
	{ letter: 'N', lit: false, position: [ 0, 3 ] },
	{ letter: 'E', lit: false, position: [ 0, 4 ] },
	{ letter: 'L', lit: false, position: [ 0, 5 ] },
	{ letter: 'A', lit: false, position: [ 0, 6 ] },
	{ letter: 'S', lit: false, position: [ 0, 7 ] },
	{ letter: 'U', lit: false, position: [ 0, 8 ] },
	{ letter: 'N', lit: false, position: [ 0, 9 ] },
	{ letter: 'A', lit: false, position: [ 0, 10 ] },

	{ letter: 'D', lit: false, position: [ 1, 0 ] },
	{ letter: 'O', lit: false, position: [ 1, 1 ] },
	{ letter: 'S', lit: false, position: [ 1, 2 ] },
	{ letter: 'I', lit: false, position: [ 1, 3 ] },
	{ letter: 'T', lit: false, position: [ 1, 4 ] },
	{ letter: 'R', lit: false, position: [ 1, 5 ] },
	{ letter: 'E', lit: false, position: [ 1, 6 ] },
	{ letter: 'S', lit: false, position: [ 1, 7 ] },
	{ letter: 'O', lit: false, position: [ 1, 8 ] },
	{ letter: 'A', lit: false, position: [ 1, 9 ] },
	{ letter: 'M', lit: false, position: [ 1, 10 ] },

	{ letter: 'C', lit: false, position: [ 2, 0 ] },
	{ letter: 'U', lit: false, position: [ 2, 1 ] },
	{ letter: 'A', lit: false, position: [ 2, 2 ] },
	{ letter: 'T', lit: false, position: [ 2, 3 ] },
	{ letter: 'R', lit: false, position: [ 2, 4 ] },
	{ letter: 'O', lit: false, position: [ 2, 5 ] },
	{ letter: 'C', lit: false, position: [ 2, 6 ] },
	{ letter: 'I', lit: false, position: [ 2, 7 ] },
	{ letter: 'N', lit: false, position: [ 2, 8 ] },
	{ letter: 'C', lit: false, position: [ 2, 9 ] },
	{ letter: 'O', lit: false, position: [ 2, 10 ] },

	{ letter: 'S', lit: false, position: [ 3, 0 ] },
	{ letter: 'E', lit: false, position: [ 3, 1 ] },
	{ letter: 'I', lit: false, position: [ 3, 2 ] },
	{ letter: 'S', lit: false, position: [ 3, 3 ] },
	{ letter: 'A', lit: false, position: [ 3, 4 ] },
	{ letter: 'S', lit: false, position: [ 3, 5 ] },
	{ letter: 'I', lit: false, position: [ 3, 6 ] },
	{ letter: 'E', lit: false, position: [ 3, 7 ] },
	{ letter: 'T', lit: false, position: [ 3, 8 ] },
	{ letter: 'E', lit: false, position: [ 3, 9 ] },
	{ letter: 'N', lit: false, position: [ 3, 10 ] },

	{ letter: 'O', lit: false, position: [ 4, 0 ] },
	{ letter: 'C', lit: false, position: [ 4, 1 ] },
	{ letter: 'H', lit: false, position: [ 4, 2 ] },
	{ letter: 'O', lit: false, position: [ 4, 3 ] },
	{ letter: 'N', lit: false, position: [ 4, 4 ] },
	{ letter: 'U', lit: false, position: [ 4, 5 ] },
	{ letter: 'E', lit: false, position: [ 4, 6 ] },
	{ letter: 'V', lit: false, position: [ 4, 7 ] },
	{ letter: 'E', lit: false, position: [ 4, 8 ] },
	{ letter: 'P', lit: false, position: [ 4, 9 ] },
	{ letter: 'M', lit: false, position: [ 4, 10 ] },

	{ letter: 'L', lit: false, position: [ 5, 0 ] },
	{ letter: 'A', lit: false, position: [ 5, 1 ] },
	{ letter: 'D', lit: false, position: [ 5, 2 ] },
	{ letter: 'I', lit: false, position: [ 5, 3 ] },
	{ letter: 'E', lit: false, position: [ 5, 4 ] },
	{ letter: 'Z', lit: false, position: [ 5, 5 ] },
	{ letter: 'S', lit: false, position: [ 5, 6 ] },
	{ letter: 'O', lit: false, position: [ 5, 7 ] },
	{ letter: 'N', lit: false, position: [ 5, 8 ] },
	{ letter: 'C', lit: false, position: [ 5, 9 ] },
	{ letter: 'E', lit: false, position: [ 5, 10 ] },

	{ letter: 'D', lit: false, position: [ 6, 0 ] },
	{ letter: 'O', lit: false, position: [ 6, 1 ] },
	{ letter: 'C', lit: false, position: [ 6, 2 ] },
	{ letter: 'E', lit: false, position: [ 6, 3 ] },
	{ letter: 'L', lit: false, position: [ 6, 4 ] },
	{ letter: 'Y', lit: false, position: [ 6, 5 ] },
	{ letter: 'M', lit: false, position: [ 6, 6 ] },
	{ letter: 'E', lit: false, position: [ 6, 7 ] },
	{ letter: 'N', lit: false, position: [ 6, 8 ] },
	{ letter: 'O', lit: false, position: [ 6, 9 ] },
	{ letter: 'S', lit: false, position: [ 6, 10 ] },

	{ letter: 'O', lit: false, position: [ 7, 0 ] },
	{ letter: 'V', lit: false, position: [ 7, 1 ] },
	{ letter: 'E', lit: false, position: [ 7, 2 ] },
	{ letter: 'I', lit: false, position: [ 7, 3 ] },
	{ letter: 'N', lit: false, position: [ 7, 4 ] },
	{ letter: 'T', lit: false, position: [ 7, 5 ] },
	{ letter: 'E', lit: false, position: [ 7, 6 ] },
	{ letter: 'D', lit: false, position: [ 7, 7 ] },
	{ letter: 'I', lit: false, position: [ 7, 8 ] },
	{ letter: 'E', lit: false, position: [ 7, 9 ] },
	{ letter: 'Z', lit: false, position: [ 7, 10 ] },

	{ letter: 'V', lit: false, position: [ 8, 0 ] },
	{ letter: 'E', lit: false, position: [ 8, 1 ] },
	{ letter: 'I', lit: false, position: [ 8, 2 ] },
	{ letter: 'N', lit: false, position: [ 8, 3 ] },
	{ letter: 'T', lit: false, position: [ 8, 4 ] },
	{ letter: 'I', lit: false, position: [ 8, 5 ] },
	{ letter: 'C', lit: false, position: [ 8, 6 ] },
	{ letter: 'I', lit: false, position: [ 8, 7 ] },
	{ letter: 'N', lit: false, position: [ 8, 8 ] },
	{ letter: 'C', lit: false, position: [ 8, 9 ] },
	{ letter: 'O', lit: false, position: [ 8, 10 ] },

	{ letter: 'M', lit: false, position: [ 9, 0 ] },
	{ letter: 'E', lit: false, position: [ 9, 1 ] },
	{ letter: 'D', lit: false, position: [ 9, 2 ] },
	{ letter: 'I', lit: false, position: [ 9, 3 ] },
	{ letter: 'A', lit: false, position: [ 9, 4 ] },
	{ letter: 'C', lit: false, position: [ 9, 5 ] },
	{ letter: 'U', lit: false, position: [ 9, 6 ] },
	{ letter: 'A', lit: false, position: [ 9, 7 ] },
	{ letter: 'R', lit: false, position: [ 9, 8 ] },
	{ letter: 'T', lit: false, position: [ 9, 9 ] },
	{ letter: 'O', lit: false, position: [ 9, 10 ] }
];

export const App: React.FunctionComponent = () => {
	const [ matrix, setMatrix ] = useState<IMatrix[]>([ ...defaultMatrix ]);

	const updateMatrix = () => {
		const positions = getCurrentTimePositions(new Date());
		let _matrix: IMatrix[] = [ ...defaultMatrix ];

		_matrix.forEach((entry: IMatrix, index: number) => {
			positions.forEach((position: number[]) => {
				if (entry.position.toString() === position.toString()) {
					_matrix[index].lit = true;
				}
			});
		});

		setMatrix([ ..._matrix ]);
	};
	useEffect(() => {
		updateMatrix();
		const interval = setInterval(updateMatrix, 60000);
		return () => clearInterval(interval);
	}, []);

	return (
		<SContainer>
			<Grid>
				{matrix.map((entry: IMatrix) => {
					const { position, lit, letter } = entry;
					return (
						<GridItem
							key={Math.random()}
							position={[ position[0] + 1, position[1] + 1 ]}
							lit={lit}
							letter={letter}
						/>
					);
				})}
			</Grid>
			<SSignatureContainer>
				<STitle> Word clock</STitle>
				<SSubtitle> By @danicolms</SSubtitle>
			</SSignatureContainer>
		</SContainer>
	);
};
