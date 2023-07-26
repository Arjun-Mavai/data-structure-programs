function isPalindromic(str) {
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = alphanumericStr.length - 1;

  while (left < right) {
    if (alphanumericStr[left] != alphanumericStr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindromic('naman'));
console.log(isPalindromic('naman is good')); // working code within browser's console.
