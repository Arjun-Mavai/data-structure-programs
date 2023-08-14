function lengthOfLongestSubstring(s) {
    let left = 0;  // left pointer
    let right = 0;  // right pointer
    let maxLen = 0;  // to store max length
    let charSet = new Set();  // to store unique characters

    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);  // add current char to set
            maxLen = Math.max(maxLen, right - left + 1);  // update max length
            right++;  // move right pointer to the right
        } else {
            charSet.delete(s[left]);  // remove char at left pointer from set
            left++;  // move left pointer to the right
        }
    }

    return maxLen;
}

console.log(lengthOfLongestSubstring("pwwkew"));  // Expected output: 3 (abc)
