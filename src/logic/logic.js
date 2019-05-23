export const checkHorizontal = (board, r, c) => {
    let j = c, count = 1;
    while (j > 0) {
        if (board[r][j] === board[r][j-1]) {
            count++;
            j--;
        } else break;
    }
    j = c;
    while (j < board[r].length - 1) {
        if (board[r][j] === board[r][j+1]) {
            count++;
            j++;
        } else break;
    } 
    if (count >= 4 ) {
        return board[r][c];
    } else return null;
}

export const checkVertical = board => {
    for (let j = 0; j < board[0].length; j++) {
        let count = 1, pre = board[0][j];
        for (let i = 1; i < board.length; i++) {
          if (board[i][j] === pre && board[i][j]!== null) {
              count++;
              if (count === 4) {
                  return board[i][j];
              }
          } else {
              pre = board[i][j];
              count = 1;
          }
        }
    }
    return null;
}

// const checkTopDiagonal2 = (board, r, c, number) => {
//     let height = board.length;
//     let width = board[0].length;
//     let cnt = 1;
//     for(let i = 1; i < number; ++i) {
//         let cur_r = r-i, cur_c = c-i;
//         if(cur_r < 0 || cur_r >= height ||
//            cur_c < 0 || cur_c >= width) {
//             continue;
//         }
//         if(board[cur_r][cur_c] === board[r][c]) {
//             cnt += 1;
//             if(cnt >= number) {
//                 return board[r][c];
//             }
//         }
//     }

//     for(let i = 1; i < number; ++i) {
//         let cur_r = r+i, cur_c = c+i;
//         if(cur_r < 0 || cur_r >= height ||
//            cur_c < 0 || cur_c >= width) {
//             continue;
//         }
//         if(board[cur_r][cur_c] === board[r][c]) {
//             cnt += 1;
//             if(cnt >= number) {
//                 return board[r][c];
//             }
//         }
//     }
//     return null;
// }

export const checkTopDiagonal = (board, r, c) => { 
    let i = r, j = c, count = 1;
    while (i > 0 && j > 0) {
        if (board[i][j] === board[i-1][j-1]) {
            count++;
            i--;
            j--;
        } else break;
    }
    i = r;
    j = c;
    while (i < board.length - 1 && j < board[r].length - 1) {
        if (board[i][j] === board[i+1][j+1]) {
            console.log('ctn:',count)
            count++;
            i++;
            j++;
        } else break;
    } 
    if (count >= 4 ) {
        return board[r][c];
    } else return null; 
}

export const checkBottomDiagonal = (board, r, c) => {
    let i = r, j = c, count = 1;
    while (i < board.length - 1 && j > 0) {
        if (board[i][j] === board[i + 1][j - 1]) {
            count++;
            i++;
            j--;
        } else break;
    }
    i = r;
     j = c;
    while (i > 0 && j < board[r].length - 1) {
        if (board[i][j] === board[i - 1][j + 1]) {
            count++;
            i--;
            j++;
        } else break;
    }
    if (count >= 4) {
        return board[r][c];
    } else return null;
}

export const checkDraw = board => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === null) {
                return null;
            }
        }
    }
    return "draw";
}

export const checkAll = (board, r, c) => {
    return checkHorizontal(board, r, c) || checkVertical(board) || checkTopDiagonal(board, r, c) || checkBottomDiagonal(board, r, c) || checkDraw(board);
}

