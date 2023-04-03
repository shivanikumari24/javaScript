        
        //push : to insert value at last
        //unshift : to insert value at begining
        //pop : to delete value from the last
        //shift : to delete value from the begining
        //splice : add or remove value


        let ar=[2,45,3,23,12,45,67,44,71,89]
        ar.push(200)
        ar.unshift(100)
        ar.pop()
        ar.shift()
        ar.splice(2,0,200,300,54,64,321)  //in this it add value
        ar.splice(3,5)       //it remove 5 value from the index 3
       console.log(ar ,"<br>")

        //show which element is deleted
        x=ar.pop()
        console.log(x) 

       
// loop

   let ar=[2,4,6,3,23,65,76,86,81,34]

   for(i in ar){            //for in loop print index number of given array
       console.log(i ," ")
    }

    for(i of ar){         //for of loop print the value of array
        console.log(i ," ")
    }


