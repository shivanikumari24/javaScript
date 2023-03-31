let book=[{"name":"maths","writer":"HC verma","price":"200","publication":"roli books"},
          { "name":"the indian story ","writer":"Bimal jalal","price":"240","publication":"Harper collins"},
          { "name":"A place called home","writer":"preeti shoeny","price":"290","publication":"rupa publication"},
          { "name":"queen of fire","writer":"devika rangachari","price":"500","publication":"simon"},
          { "name":"monsoon","writer":"sahitya akademi","price":"300","publication":"hachette"}]

book.map((x)=>{
console.log("Name : ",x.name,"<br>")
console.log("writer : ",x.writer,"<br>")
console.log("price : ", x.price, "<br>")
console.log("publication : ",x.publication , "<br><br><br>")
