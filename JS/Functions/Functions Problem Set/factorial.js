function factorial(num) {
 //define a result variable
 var result = 1;
 //calculate factorial and store in result
 for(var i = 2; i <= num; i++) {
     result *= i;
 }
 //return the result variable
 return result;
}