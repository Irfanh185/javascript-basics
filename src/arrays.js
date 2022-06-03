const getNthElement = (index, array) => {
  // your code here
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  let newArr = string.split('');
  console.log(newArr);
  const filterArr = newArr.filter(function(e) {
    return e !== ',';
  });
  console.log(filterArr);
  return filterArr;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  const removeN = array.splice(index, 1);
  console.log(removeN);
  return removeN;
};

const numbersToStrings = numbers => {
  // your code here
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
