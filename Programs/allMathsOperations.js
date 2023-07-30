const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getNumberType = (num) => {
  
  if (num === 1) return "composite";
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    
    if (num % i === 0) return "composite";
    
  }
  
  return "prime";
};

const performOperations = (arr) => {
  
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  
  const oddNumbers = arr.filter((num) => num % 2 !== 0);
  
  const sum = arr.reduce((acc, num) => acc + num, 0);
  
  const average = sum / arr.length;
  
  const compositeNumbers = arr.filter((num) => getNumberType(num) === "composite");
  
  const primeNumbers = arr.filter((num) => getNumberType(num) === "prime");

  return {
    evenNumbers,
    oddNumbers,
    average,
    compositeCount: compositeNumbers.length,
    primeCount: primeNumbers.length,
  };
};

const result = performOperations(numbers);
console.log(result);
