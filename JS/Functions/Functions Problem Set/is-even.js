// WET //
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// num(41);

// DRY //
function isEven(num) {
    // No need to check if it is true or false since return will be a boolean value //
    return num % 2 === 0;
}

