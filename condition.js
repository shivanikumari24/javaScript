
const prompt= require('prompt-sync')();

var calls = prompt("Enter number of calls : ");

        if(calls <= 100){
            charge = 100 * .25 ;
        }
        else if( calls <=250){
            charge = (calls - 100)* .50 + 100*.25 ;
        }
        else if( calls <= 500 ) {
            charge = (calls -250)* .75 + 150*.50 + 100*.25 ;
        }
        else{
            charge =(calls-500)*1 + 250*.75 + 150*.50 + 100*.25;
        }

    console.log("total charge = ", charge);
