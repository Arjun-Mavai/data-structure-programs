const array1 = [1,2,3,4,5,6,7,8,9,10,3,3,3,4,2,2,1,1,7,7,7,7,8];

const mappedArray = array1.reduce((acc ,item)=> {
 const doubleItem = item*2 ;
 
    if(doubleItem<7 )
    {

     acc.push(doubleItem) ;
 }
    
return acc;
    
} , []);
