function repeatString(string, repetitions) {
  let result = "";
  if (repetitions < 0) {
    return "ERROR"
  } else {
  for (let i = 0; i < repetitions; i++) {
    result += string;
  }
}
  return result;
};

// Do not edit below this line
module.exports = repeatString;