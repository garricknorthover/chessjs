const pieces = {
    pawn: (a,b) => board[a + 1][b] == 'empty' ? 'can move' : 'cannot',
    knight: () => 'knightFun',
    bishop: () => 'bishopFun',
    queen: () => 'Queen function',
    king: () => 'kingFun',
    rook: () => 'rookFun',
    x: 'empty'
}
const { pawn, knight, bishop, queen, king, rook, x } =  pieces 

const board = [
    [rook, knight, bishop, queen, king, bishop, knight, rook],
    [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
    [x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x],
    [x, x, x, x, x, x, x, x],
    [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
    [rook, knight, bishop, queen, king, bishop, knight, rook],]

const possible_moves = (a, b) => board[a][b](a,b)

possible_moves(1,6)//?

export {possible_moves}
