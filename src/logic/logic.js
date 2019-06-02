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

export const checkVertical = (board, r, c) => {
    let i = r, count = 1;
    while (r > 0) {
        if (board[i][c] === board[i-1][c]) {
            count++;
            i--;
        } else break;
    }
    i = r;
    while (i < board.length - 1) {
        if (board[i][c] === board[i+1][c]) {
            count++;
            i++;
        } else break;
    } 
    if (count >= 4 ) {
        return board[r][c];
    } else return null;
}

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

