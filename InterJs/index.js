const {
  spreader,
  objMaker,
  factorial,
  switcher,
  arrower,
  worder,
  factorer,
  Constructoror,
} = require("./fun1");
const list = ["A", "Dialogue", "with", "death"];
// console.log(spreader(2, list));

// ========================================================================

const words_list = "the study of all biological aspects of parasites and parasitic diseases".split(
  " "
);
// console.log(words_list);
// console.log(objMaker(words_list));

// ========================================================================
const num = 50;
// console.log(`The factorial of ${num} is ${factorial(num)}`);
// ========================================================================

// switcher("of");
// ========================================================================
// words_list.map((eachWord) => console.log(arrower(eachWord)));

// ========================================================================

// words_list.map((eachWord) => console.log(worder(eachWord)));

// ========================================================================

words_list.map((eachWord) => console.log(factorer(eachWord)));

// ========================================================================

words_list.map((eachWord) => console.log(new Constructoror(eachWord)));
