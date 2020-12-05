const {Ship, GameBoard} = require('./battleship');

test('creates Ship object', () => {
    testShip = Ship([[0, 1], [0, 2], [0, 3]]);
    expect(typeof(testShip)).toContain("object");
})

test('can hit', () => {
    testShip = Ship([[0, 1], [0, 2], [0, 3]]);
    testShip.hit(0, 1);
    expect(testShip.hitLocations).toEqual([[0, 1]]);
})

test('can sink', () => {
    testShip = Ship([[0, 1], [0, 2], [0, 3]]);
    testShip.hit(0, 1);
    testShip.hit(0, 2);
    testShip.hit(0, 3);
    expect(testShip.isSunk()).toBe(true);
})

test('can not hit the same location twice', () => {
    testShip = Ship([[0, 1], [0, 2], [0, 3]]);
    testShip.hit(0, 1);
    testShip.hit(0, 2);
    testShip.hit(0, 1);
    expect(testShip.hitLocations).toEqual([[0, 1], [0, 2]]);
})

test('Gameboard can hit ships', () => {
    testBoard = GameBoard()
    successfulHit = testBoard.receiveAttack([1, 2])
    expect(successfulHit).toBe(true);
})

test('Gameboard returns false on repeat target', () => {
    testBoard = GameBoard()
    testBoard.receiveAttack([1, 2])
    successfulHit = testBoard.receiveAttack([1, 2])
    expect(successfulHit).toBe(false);
})

test('Missed shots are logged', () => {
    testBoard = GameBoard()
    testBoard.receiveAttack([9, 9])
    expect(testBoard.missedAttacks).toEqual([[9, 9]])
})

test('allSunk reports true', () => {
    testBoard = GameBoard()
    allCoordinates = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [3, 5], [4, 5], [6, 5], [7, 5], [6, 9], [6, 8], [6, 7], [4, 8], [5, 8], [3, 8], [7, 2], [7, 3]]
    allCoordinates.forEach(coordinates => {
        testBoard.receiveAttack(coordinates)
    })
    expect(testBoard.allSunk()).toBe(true)
})

test('allSunk reports false', () => {
    testBoard = GameBoard()
    allCoordinates = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]]
    allCoordinates.forEach(coordinates => {
        testBoard.receiveAttack(coordinates)
    })
    expect(testBoard.allSunk()).toBe(false)
})
