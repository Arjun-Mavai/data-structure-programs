function createCounter(n){
 let counter = n-1;       // defined the variable and now setting it in its setter inner function increment then returning it there

 function increment(){
     counter += 1;
     return counter;
 }

 return increment;


 }


  const counter1 = createCounter(10)
  counter1() // 10
   counter1()
   counter1()
