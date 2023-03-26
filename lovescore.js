const prompt= require('prompt-sync')();


//find your lovescore 

prompt("enter your name : ");
prompt("enter their name : ");

var lovescore = Math.random()*100;
lovescore =Math.floor(lovescore)+1;
console.log("Your LoveScore is " , lovescore ,"%");
