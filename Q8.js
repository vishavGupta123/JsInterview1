//let and const keywords are introduced in ES6?Why do we need them

//use of let.
//let is used when we have to use the variable only inside a block

//for example

for (var i = 0; i < 5; i++) {
  console.log(i);
}
//try print i after the for loop completes its execution
console.log(i);

//u will see that the value of i is 5.It means the variable that we define inside the for loop is accessible outside the loop also.
//this happens because of JavaScript hoisting the var type variables.
//when we declare a variable as var then javascript hoist that variable at the top with value of undefined.

for (let j = 0; j < 5; j++) {
  console.log(j);
}
//try logging the value of j after the for loop execution
// console.log(j);
//you will get ReferenceError: j is not defined

//const keyword is similar to c++ where the meaning is that the value of the variable cannot be reassigned
const a = 1;

//now you cannot do a=2; It will throw TypeError:Assignment to constant variable
// we can declare objects with const keyword as well.Like

const b = {};

//When you create an object with const, you can still change it’s contents.
//const only prevents re-assigning, it doesn’t make the entire object immutable.

b.name = "abc";
b.rollno = 10;

//b will remain object only.So this console.log will not give us any error.
console.log(b);

//const should be used over let because it prevents us from accidentally overwriting variables.
