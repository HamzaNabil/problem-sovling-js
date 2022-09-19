// Write function that take 2 params 
// first paramter is string of one word
// second paramter is a character 
// calculate the number of char that apper in the string

// "HHHB"
// "B"
// 1
// String is array of charaters
function countChar(str, char) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] == char) {
            count++
        }
    }
    console.log(count);
}

// "HHHB"
// i = 0 | i < 4 | H == H | count = 1
// i = 1 | 1 < 4 | H == H | count = 2
// i = 2 | 2 < 4 | H == H | count = 3
// i = 3 | 3 < 4 | B == H |
// i = 4 | 4 < 4

countChar("HHHB", "N")