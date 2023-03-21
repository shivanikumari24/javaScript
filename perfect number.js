const prompt= require('prompt-sync')();

//perfect number 
/* 
A perfect number is a positive integer that is equal to the sum of its factors except for the number itself.
In other words, perfect numbers are the positive integers that are the sum of its divisors.
The smallest perfect number is 6, which is the sum of its factors: 1, 2, and 3.
It is to be noted that this sum does not include the number itself which is al 
*/

var n=prompt("enter a number : ");
var sm=0;
for(i=1;i<=Math.floor(n/2);i++){
    if(n%i==0){
        sm=sm+i;
    }
}
if(sm==n){
    console.log("perfect number")
    }
else{
    console.log("not perfect number")
}