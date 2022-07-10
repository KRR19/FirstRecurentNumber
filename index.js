function getFirstRecurentNumber(values) {
    const hashSet = new Set();

    for(let i = 0; i < values.length; i++) {
        if(hashSet.has(values[i])) {
            return values[i];
        }
        hashSet.add(values[i]);
    }
}


console.log(getFirstRecurentNumber([2,5,1,2,3,5,1,2,4]))
console.log(getFirstRecurentNumber([2,1,1,2,3,5,1,2,4]))
console.log(getFirstRecurentNumber([2,3,4,5]))