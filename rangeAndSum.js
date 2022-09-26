// write a function that take 3 params and return array with that numbers
// then sum the numbers of this array with Another function 

// 1 start
// 5 end 
// 2 step
// [1,3,5]


// 7
// 12
// 1
// [7,8,9,10,11,12]

function range(start, end, step) {
    let arr = [];
    
    if(start < end && step < 0) {
        [start, end] = [end, start];
    }
    if(start > end && step > 0) {
        [start, end] = [end, start];
    }
    if(step > 0) {
        for(let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for(let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

// [1,2,3,4,5]
console.log(range(1, 5, 1));
console.log(range(1, 5, -1));
console.log(range(10, 5, -1));
console.log(range(10, 5, 1));

function sum(arr) {
    let sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

let arr = range(10, 5, -1);
console.log(sum(arr));;