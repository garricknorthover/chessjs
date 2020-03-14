// const moves = {
//     diagonalLeft: (a, b) => [++a, --b],
//     diagonalRight: (a, b) => [++a, ++b],
//     backDiagonalLeft: 'backDiagonalLeft',
//     backDiagonalRight: 'backDiagonalRight',
//     up: (a, b) => [a++, b],
//     back: 'back',
//     left: 'left',
//     right: 'right',
// }
// const { diagonalLeft, diagonalRight, backDiagonalLeft, backDiagonalRight, up, back, left, right } = moves

const pieces = {
    pawn: (a, b) => pawnMoves(a, b),
    knight: 'knightFun',
    bishop: 'bishopFun',
    queen: 'Queen function',
    king: 'kingFun',
    rook: 'rookFun',
    opPawn: 'opPawn',
    opKnight: 'opKnight',
    opBishop: 'opBishop',
    opQueen: 'opQueen',
    opKing: 'opKing',
    opRook: 'opRook',
    x: 'empty'
}
const { pawn, knight, bishop, queen, king, rook, opPawn, opKnight, opBishop, opQueen, opKing, opRook, x } = pieces

const board = [
    [rook, knight, bishop, queen, king, bishop, knight, rook],
    [pawn, pawn, pawn, pawn, pawn, opPawn, pawn, opPawn],
    [x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x],
    [opPawn, opPawn, opPawn, opPawn, opPawn, opPawn, opPawn, opPawn],
    [opRook, opKnight, opBishop, opQueen, opKing, opBishop, opKnight, opRook],]

const pawnMoves = (a, b) => {
    let poss = []
    if (a == 1 && !board[a + 1][b].includes('op')) poss = [...poss, [a + 1, b]]

    return poss.flat(0)
}

const possible_moves = (a, b) => board[a][b](a, b)


possible_moves(1, 6)//?

export { possible_moves }
