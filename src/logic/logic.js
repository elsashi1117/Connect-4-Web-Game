const checkHorizontal = board => {
    for (let i = 0; i < board.length; i++) {
        let count = 1,
            pre = board[i][0];
        for (let j = 1; j < board[0].length; j++) { 
            if (board[i][j] === pre && board[i][j]!== null) {
                count++;
                if (count >= 4) { 
                    return board[i][j];
                }
            } else {
                count = 1;
                pre = board[i][j];
            }
        }      
    }
    return null;
}

const checkVertical = board => {
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

const checkTopDiagonal = board => { 
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let r = i, c = j, count = 1;
            while (r < board.length - 1 && c < board[r].length - 1) {
                if (board[r][c] === board[r+1][c+1]&& board[r][c]!==null) {
                    count++;
                }
                if (count === 4 ) {
                    return board[r][c];
                };
                r++;
                c++;
            }
        }
    }
    return null;   
}

const checkBottomDiagonal = board => {
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[i].length; j++) {
            let r = i, c = j, count = 1;
            while (r > 0 && c < board[r].length - 1) {
                if (board[r][c] === board[r-1][c+1] && board[r][c]!==null) {
                    count++;
                }
                if (count === 4 ) {
                    return board[r][c];
                };
                r--;
                c++;
            }
        }
    }
    return null;
}

const checkDraw = board => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === null) {
                return null;
            }
        }
        return "draw";
    }
}

export const checkAll = board => {
    return checkHorizontal(board) || checkVertical(board) || checkTopDiagonal(board) || checkBottomDiagonal(board) || checkDraw(board);
}

