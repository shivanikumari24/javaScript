//write a function to input a number and check it is prime and palindrome both

    function fun(n){
        x=0
        for(i=2;i<=Math.floor(n/2);i++){
            if(n%i==0){
                x=1
                break;
            }
        }
        if(x==0){
            s=0
            m=n
            while(m>0){
                r=m%10
                s=s*10+r
                m=Math.floor(m/10)
            }  
            if(s==n){
                return "Number is prime and palindrome both"
            }else{
                return "Number is prime but not palindrom "
            }

        }
        else{
            return "Number is not prime"
        }
    }
    z=fun(prompt("enter number"));
    console.log(z)
    // fun(197)
