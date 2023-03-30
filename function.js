//LCM of two  number
  function lcm(a,b){
    for(i=1;i<=a*b; i++){
        if(i%a==0 && i%b==0){
            break;
        }
        
    } 
    return i;
  }
x=lcm(15,3);
console.log("Lcm is : ", x) 

//HCF of two number
  function hcf(a,b){
    min=(a<b)? a:b
    for(i=min;i>=1;i--){
        if(a%i==0 && b%i==0){
            return i;
        }
        
    }
}
 x=hcf(24,36);
 console.log("HCF is : "+ x);
