import React from 'react';
import Cell from './Cell'

const Row = ({row, clickBoard, rowIndex}) => {
    // console.log(row)
    return (
        <tr>
           {row.map((cell,i) => (
               <Cell 
               key={i} 
               cellIndex={i} 
               color={cell}
               rowIndex={rowIndex} 
               clickBoard={clickBoard}/>
           ))}
        </tr>
    )
}

export default Row;