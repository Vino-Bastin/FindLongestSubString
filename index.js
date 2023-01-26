const findLongestSubString = (str1, str2) => {
  let str = [str1, str2].concat().sort();
  const a1 = str[0];
  const a2 = str[str.length - 1];
  const l = a1.length;
  let i = 0;
  while (i < l && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
};

console.log(findLongestSubString("abcd", "abcefg"));
