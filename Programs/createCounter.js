function createCounter(n){
 let counter = n-1;

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
