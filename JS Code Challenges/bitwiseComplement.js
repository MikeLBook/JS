const bitwiseComplement = (N) => {
    const result = []
    N.toString(2).split('').forEach(digit => {
        digit === '1' ? result.push('0') : result.push('1')
    })
    return parseInt(result.join(''), 2)
}

// the one liner:
// return parseInt(N.toString(2).split('').map(bit => bit === '1' ? '0' : '1').join(''), 2);

module.exports = bitwiseComplement;