const findLongestSubString = (str1 = "", str2 = "") => {
  // * string to array
  const s1 = [...str1];
  const s2 = [...str2];

  // * create 2d array
  const arr = Array(s2.length + 1)
    .fill(null)
    .map(() => {
      return Array(s1.length + 1).fill(null);
    });

  // * fill first row and first column with 0
  for (let j = 0; j <= s1.length; j += 1) {
    arr[0][j] = 0;
  }
  for (let i = 0; i <= s2.length; i += 1) {
    arr[i][0] = 0;
  }

  let len = 0;
  let col = 0;
  let row = 0;

  // * fill the rest of the array
  for (let i = 1; i <= s2.length; i += 1) {
    for (let j = 1; j <= s1.length; j += 1) {
      if (s1[j - 1] === s2[i - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = 0;
      }
      if (arr[i][j] > len) {
        len = arr[i][j];
        col = j;
        row = i;
      }
    }
  }
  if (len === 0) {
    return "";
  }
  // * find the longest substring
  let res = "";
  while (arr[row][col] > 0) {
    res = s1[col - 1] + res;
    row -= 1;
    col -= 1;
  }
  return res;
};
console.log(findLongestSubString("ABABC", "BABCA"));
