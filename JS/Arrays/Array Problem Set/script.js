// *** Start of printReverse function ***//
//create printReverse function
function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]); 
    }
}
console.log(printReverse([2,3,4,5,6]));


// *** Start of isUniform function *** //

function isUniform(arr) {
    //create a var to compare with other items in the array
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }        
    }
    return true;
}
console.log(isUniform([1,1,1,1]));

// // Alternative Solution with forEach loop //
// function isUniform(arr) {
//     var first = arr[0];
//     arr.forEach(function(element) {
//         if (element !== first) {
//             return false;
//         }
//     });
//     return true;    
// }
// This solution will not work because after the 'return false' is executed the forEach loop is ended not the whole function isUniform. So we will always see a return of true //


// *** Start is sumArray function ***//

function sumArray(numbersArray) {
      var total = 0;
      numbersArray.forEach(function(arr) {
          total += arr;
      });
      return total;
}
    console.log(sumArray([20,10,10]));

// *** Start max() array function ***//
function max(arr) {
    var maxNumber = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            max = arr[i];
        }
    }
    return max;
}
console.log(max([3,4,5]));