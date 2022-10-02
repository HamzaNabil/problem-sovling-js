// get Middle of string 
// ex : odd => d
// ex : test => es

function getMiddle(str) {
    let length = str.length;
    let mid = Math.floor(length / 2) ;
    if(length % 2 == 0) {
        console.log(str[mid - 1] + str[mid] );
    } else {
        console.log(str[mid]);
    }

}
getMiddle("hamada")
getMiddle("odd")
getMiddle("test")