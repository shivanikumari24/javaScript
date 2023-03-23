const prompt= require('prompt-sync')();

//prime number between 1-100

for(var i=1;i<=100;i++){
    for(var j=2;j<i;j++){
        if(i%j==0){
            break;
        }   
    }
    if(i==j){
            console.log(i )
    }

}

//prime number by user input (from-to)
        var n1=Number(prompt("enter first number"))
        var n2=Number(prompt("enter second number"))

        for(i=n1;i<=n2;i++){
            for(j=2;j<=Math.floor(i/2);j++){
                if(i%j==0){
                    break;
                }             
            }
            if(i%j !==0 ){
                console.log(i, "<br>")
            }
        }