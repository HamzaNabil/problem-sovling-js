// write factorial function 
// Ex: 5! = 5 * 4 * 3 * 2 * 1
// with function 
// with recursion

function factorial1(n) {
    let fact = 1;
    for(let i = n; i > 1; i--) {
        fact = fact * i;
    }

    console.log(fact);
}

factorial1(3);

// i = 3 | 3 > 1 | fact = 1 * 3 = 3
// i = 2 | 2 > 1 | fact = 3 * 2 = 6
// i = 1 | 1 > 1 | 


function factorial2(n) {
    if(n == 0) return 1
    return n * factorial2(n - 1);
}

console.log(factorial2(5))
// factorial(5)
// return 5 * factorial(4)
//              return  4 * factorial(3)
//                              return 3 * factorial(2)
//                                             reuturn 2 * factorial(1)
//                                                          return 1 * factorial(0)
//                                                                          1