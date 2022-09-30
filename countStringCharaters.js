// abcda => {a: 2, b:1, c:1, d:1}

function countStringChars(str) {
    let obj = {};
    str.split("").forEach(ch => {
       obj[ch] = obj[ch] ? (obj[ch] + 1) : 1
    })
    return obj;
}

console.log(countStringChars("abcda"));

// ["a", "b" , "c", "d", "a" ]
// {a: 2, b:1, c:1 , d:1 }