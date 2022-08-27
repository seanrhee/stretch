// The Luhn Algorithm (https://en.wikipedia.org/wiki/Luhn_algorithm) is used to validate various identitifcation numbers,
// such as credit card numbers and social insurance numbers.

// Instruction
// Write a function check, which, given a number, returns whether it is valid or not (according to the Luhn Algorithm).

const check = function(number) {
  let numberArray = (String(number).split(''));

  const checkDigit = numberArray.pop()

  console.log(numberArray);
  console.log(checkDigit);


  numberArray = numberArray.reverse().map(x => Number(x));

  for (let i = 0; i < numberArray.length; i += 2) {
    numberArray[i] *= 2; 
    
    if (numberArray[i] >= 10) {
      numberArray[i] = String(numberArray[i]).split('');
    }
  }

  // recursive add
  let resultingDigitsSum = 0;

  const addItems = function(array) {
    array.forEach(item => {
      if (Array.isArray(item)) {
        addItems(item);
      } else {
        resultingDigitsSum += Number(item);
      }
    })
  
    return resultingDigitsSum;
  }
  // end recursive function

  let resultingDigits = addItems(numberArray);

  checkDigitTest = 10 - (resultingDigits % 10);

  if (checkDigit == checkDigitTest) {
    return "This number is valid";
  }
  return "This number is invalid";
}



console.log(check(4024007109022143));