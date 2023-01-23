// 4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.

// Examples:
// Input: "day" Output: "d"
// Input: "apple" Output: "ppl"
// Input: "javascript" Output: "jvscrpt"
let str = "javascript";

function name(str) {
  let list = str.split("");
  let vowels = "aeıioöuü";
  console.log(list);
  let filt = list.filter((e) => !vowels.includes(e));
  console.log(filt);
  return filt.join("");
}
console.log(name(str));
