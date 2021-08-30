const Dob = document.querySelector(".one");
const luckyNumber = document.querySelector(".two");
const checkButton = document.querySelector(".checkBtn");
const outputMessage = document.querySelector("#output-msg");

const calculateSumofDigits = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum += Number(digit);
  }
  return sum;
};

const checkIfNumberLucky = (sumOfDate, numberToCheck) => {
  if (sumOfDate % numberToCheck === 0) {
    outputMessage.innerText = `${numberToCheck} is Lucky for you!! 😄`;
  }
  else{
  outputMessage.innerText = `${numberToCheck} isn't that lucky for you 😫`;
  }
};


checkButton.addEventListener("click", () => {
  const date = Dob.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) {
    const sumOfDigits = calculateSumofDigits(date);
    checkIfNumberLucky(sumOfDigits, numberToCheck);
  } 
  else {
    alert("Please enter both the fields.");
  }
});