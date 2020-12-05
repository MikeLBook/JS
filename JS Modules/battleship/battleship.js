function Ship(coordinateArray) {
    const length = coordinateArray.length;
    const hitLocations = new Array();

    const hit = (x, y) => {
        let alreadyHit = false;
        hitLocations.forEach(location => {
            if (location[0] === x && location[1] === y) {
                alreadyHit = true;
            }
        })
        if (!alreadyHit) {
            hitLocations.push([x, y]);
        }
        return !alreadyHit;
    }

    const isSunk = () => {
        return hitLocations.length === length ? true : false
    }

    return {hit, isSunk, hitLocations}
}

function GameBoard() {
    const ships = {
        carrier : [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]],
        battleship : [[3, 5], [4, 5], [6, 5], [7, 5]],
        destroyer : [[6, 9], [6, 8], [6, 7]],
        submarine : [[4, 8], [5, 8], [3, 8]],
        patrol : [[7, 2], [7, 3]],
    }

    const createShips = () => {
        const carrier = Ship(ships['carrier']);
        const battleship = Ship(ships['battleship']);
        const destroyer = Ship(ships['destroyer']);
        const submarine = Ship(ships['submarine']);
        const patrol = Ship(ships['patrol']);
        return {carrier, battleship, destroyer, submarine, patrol}
    }

    const {carrier, battleship, destroyer, submarine, patrol} = createShips();

    const missedAttacks = [];
    
    const receiveAttack = target => {
        const [x, y] = target;
        let targetShip = null;
        let alreadyHit = null;
        for (const [key, value] of Object.entries(ships)) {
            value.forEach(coordinateArray => {
                if (coordinateArray.toString() === target.toString()) {
                    switch (key) {
                        case 'carrier':
                            targetShip = carrier;
                            break;
                        case 'battleship':
                            targetShip = battleship;
                            break;
                        case 'destroyer':
                            targetShip = destroyer;
                            break;
                        case 'submarine':
                            targetShip = submarine;
                            break;
                        case 'patrol':
                            targetShip = patrol;
                            break;
                    }
                }
            })
        }
        if (targetShip !== null) {
            alreadyHit = targetShip.hit(x, y);
        } else {
            missedAttacks.push(target);
        }
        return alreadyHit;
    }

    const allSunk = () => {
        if (carrier.isSunk() && battleship.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrol.isSunk()) {
            return true
        } else {
            return false
        }
    }

    return {missedAttacks, receiveAttack, allSunk, carrier, battleship, submarine, patrol, destroyer}
}

module.exports = {Ship, GameBoard};