const spreader = (value, list) => {
  let resultList = [];
  for (let i = 0; i < value; i++) {
    resultList += [...list, " "];
  }
  return resultList;
};

exports.spreader = spreader;
// ========================================================================
const objMaker = (words_list) => {
  const returnObj = {};
  for (let word of words_list) {
    returnObj[word] = word.length;
  }
  return returnObj;
};

exports.objMaker = objMaker;
// ========================================================================
const factorial = (value) => {
  if (value === 1) {
    return 1;
  }
  return value * factorial(value - 1);
};
exports.factorial = factorial;

// ========================================================================

const switcher = (word) => {
  switch (word.length) {
    case 1:
      console.log(`Given word "${word}" is ${word.length}`);
      break;
    case 2:
      console.log(`Given word "${word}" is ${word.length}`);
      break;
    case 3:
      console.log(`Given word "${word}" is ${word.length}`);
      break;
    default:
      break;
  }
};

exports.switcher = switcher;
// ========================================================================

const arrower = (word) => `Hi ${word}`;
exports.arrower = arrower;
// ========================================================================

const worder = (word) => {
  return {
    word: word,
    length: word.length,
  };
};

exports.worder = worder;

// ========================================================================

function vowelsCount(word) {
  let c = 0;
  let vows = ["a", "e", "i", "o", "u"];
  for (let letter of word) {
    if (vows.includes(letter)) {
      c += 1;
    }
  }
  return c;
}

function factorer(word) {
  return {
    word: word,
    length: word.length,
    vowCount: vowelsCount(word),
  };
}

exports.factorer = factorer;
// ========================================================================

function Constructoror(word) {
  this.word = word;
  this.length = this.word.length;
  this.vowCount = vowelsCount(this.word);
}

exports.Constructoror = Constructoror;
// ========================================================================

const reverser = (word) => {
  let result = word.split("").reverse().join("");
  return result;
};

exports.reverser = reverser;

// ========================================================================
