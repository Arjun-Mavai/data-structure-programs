function reverseString(str) {
  let s = [];

  for (let i = 0; i < str.length; i++) {
    s.push(str.charAt(i));
  }

  str = "";
  while (s.length > 0) {
    str += s.pop();
  }

  return str;
}

let d = reverseString("hello how are you");
console.log(d);
