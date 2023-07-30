function sumOfDigits(num) { 
  let sum = 0; 
  
  num = Math.abs(num); 
  
  while(num!==0)
  {
    sum += num%10;
    num = Math.floor(num/10); 
  } 
  return sum; 
}
