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
document.write("Lcm is : ", x) 
