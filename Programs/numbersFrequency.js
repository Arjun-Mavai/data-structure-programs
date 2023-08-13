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


const text = "apple banana apple orange banana apple";
const words = text.split(" ");

const wordFrequency = words.reduce((acc, word) => {
  if (!acc[word]) {
    acc[word] = 1; // Create a new key with initial frequency 1
  } else {
    acc[word] += 1; // Increment the frequency if the word is already a key
  }
  return acc;
}, {});

console.log(wordFrequency);
