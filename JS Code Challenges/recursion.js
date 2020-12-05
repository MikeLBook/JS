function theirComboSum(candidates, target) {
    const buffer = [];
    const result = []; 
    recursivelySearch(0, target);
    return result;
  
    function recursivelySearch(index, target) {
        // base case(s)
        if (target === 0) return result.push(buffer.slice());
        if (target < 0) return;
        if (index === candidates.length) return;
        // recursive case - can call more than once (if you're a sociopath)
        buffer.push(candidates[index]);
        recursivelySearch(index, target - candidates[index]);
        buffer.pop();
        recursivelySearch(index + 1, target);
    }
}

const combinationSum = (candidates, target) => {
    const result = []
    candidates.forEach(candidate => {
        const buffer = [candidate];
        if (candidate === target) { 
            validate(buffer)
        } else if (candidate < target) {
            combinationSum(candidates, target - candidate)
            .forEach(branch => {
                const bufferBranch = [...buffer];
                bufferBranch.push(...branch);
                validate(bufferBranch);
            })              
        }
    });
    return result;

    function validate(buffer) {
        buffer.sort((a, b) => a - b);
        if (!result.some(sumArray => String(sumArray) === String(buffer))) {
            result.push(buffer);
        }
    }
}

// whicheverFunction([2, 3, 5], 8)
// console.logs
// [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]


