const prompt= require('prompt-sync')();  


//print the initials of a name with the surname

//1st method  (applicable on any number of word in a name)

let a =prompt("enter name")
var last = a.lastIndexOf(" ");
console.log(a.charAt(0)+".");   //it  print first character with dot(.)
for(i=0;i<last;i++){  
    ch=a.charAt(i);
    if(ch==" "){
        console.log(a.charAt(i+1)+".");
    }
}
console.log(a.substring(last+1)); //it print character that is after the last space of name



//2nd method
abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return ( " "+ split_names[0].charAt(0) +" . " + split_names[1].charAt(0) + " . "+ split_names[0] + ".");
    }
    return split_names[0];
    };
console.log(abbrev_name(prompt("enter name: ")));


//3rd method (it is applicable on only name that contain three word)
fname=prompt("enter first name: ")
mname=prompt("enter middle name: ")
lname=prompt("enter last name: ")
console.log(fname[0]," . ",mname[0]," . ",lname);