
exports.min = function min (array = []) {
    return (array.length<1) ? 0 : Math.min(...array); 
}

exports.max = function max (array = []) {
    return (array.length<1) ? 0 : Math.max(...array);
}

exports.avg = function avg (array = []) {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    return (array.length<1) ? 0 : sum/array.length; 
}
