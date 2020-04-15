//Why we need async await ?

//async await is basically a neat version of promises.They are made on the top of Promise

//creating simple function
var result1 = function () {
  return "Hi World";
};
console.log(result1());

//creating a function with async keyword put in front of it
var result2 = async function () {
  return "Hi World";
};

//try logging the result2 function.You will see that it returns us a promise.
//so we can use the given result as a promise.
console.log(result2());
result2().then((value) => {
  console.log(value);
});

//Error handling is also easy in async await we can use try catch block and if there is any error while
//running the async function. it will be handled inside the catch block.
//But it is not the case in promises.
//until we know the chaining of promises properly,we cannot tell which block has generated error.

//async-await reduces the complexity of writing the code.It can be very cumbersome to handle various promises
//by using .then statement followed by .catch statement.So async-await helps us in reducing the complexity of code.

//for example

function implementPromise() {
  promiseFunction()
    .then(doSomething)
    .then(null, (err) => console.error("An error!"));
}

async function implementAsyncAwait() {
  try {
    let result = await randomFunction();
    doSomething(result);
  } catch (err) {
    console.error("An error");
  }
}
