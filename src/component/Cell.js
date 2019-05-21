import React from 'react';

const Cell = ({clickBoard, cellIndex, color, rowIndex}) => {
    return (
        <td>
            <div className="cell" onClick={()=>clickBoard(rowIndex, cellIndex)}>
                <div className={"outer circle " + (color)}>
                {color && <div className={"inner circle " + (color)}></div>}

                </div>
            </div>
        </td>
    )
}

export default Cell;