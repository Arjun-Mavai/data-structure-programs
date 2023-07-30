function findPrimes(limit) {
  // Create an array to track whether each number is prime or not
  const primes = new Array(limit + 1).fill(true);

  // 0 and 1 are not prime, so mark them as false
  primes[0] = primes[1] = false;
  
  // Find prime numbers up to the square root of the limit
  const max = Math.sqrt(limit);
  for (let i = 2; i <= max; i++) {
    if (primes[i]) {
      // Mark multiples of i as non-prime (composite)
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  // Extract prime numbers from the array
  const primeNumbers = primes.reduce((acc, isPrime, number) => {
    if (isPrime) {
      acc.push(number);
    }
    return acc;
  }, []);

  return primeNumbers;
}

const limit = 100;
const primes = findPrimes(limit);
console.log(primes);
