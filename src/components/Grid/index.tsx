import React from 'react'
import { SGrid } from './styles'

interface IProps {
    children?: React.ReactNode[]
}

const Grid: React.FunctionComponent<IProps> = ({ children }) => {
    return (
        <SGrid>{children}</SGrid>
    )
}

export default Grid