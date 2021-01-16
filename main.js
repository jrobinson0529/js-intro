// ******* START FUNCTIONS *******
// --------- Function Types ---------
// oneMore(); // Hoisted function call

function yetAnother() {
  console.log('Do something');
};
const anotherOne = function() {
  console.log('Do it');
};
function oneMore() {
  console.log('Hoisted function call!');
};
//Calling a function
// yetAnother();

const sayHello = () => {
  console.log('What up world');
};

// sayHello();

// --------- PASSING ARGUMENTS TO A FUNCTION ---------
// function withArg(argument){
//   console.log("My argument was: " + argument);
// };
// CALLED -
// withArg("Hello World!");

// ----------- FUNCTIONS WITH ARGUMENTS -----------

function logsHello(name) {
  console.log(`Hello, ${name}!`);   // Why does this function need no ;
}

// logsHello('Jesse Robinson');

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum);
  return sum;
}
console.log(addsTwoNumbers(3, 5));
// -------- CONTROL FLOW & COMPARISON OPERATORS -------- Next
