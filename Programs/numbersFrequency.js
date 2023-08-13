const array1 = [1,2,3,4,5,6,7,8,9,10,3,3,3,4,2,2,1,1,7,7,7,7,8];


const frequecnyItems = array1.reduce((acc , item )=> { 

    if(!acc[item] ){

        acc[item] = 1
    } 

    else {

        acc[item] +=1
    }

    return acc;
 

    
} , {})
