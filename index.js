const pieces = {
    pawn: 'pawn',
    knight: 'knight',
    bishop: 'bishop',
    queen: 'queen',
    king: 'king',
    rook: 'rook',
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

const possible_moves = (a, b) => [[2, 2], [3, 2]]

export {possible_moves}
