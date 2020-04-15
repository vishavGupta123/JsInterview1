//Implementing the stacks using javascript

//creating a Stack class with empty array list
function Stack() {
  this.elements = [];
}

//creating a push function
Stack.prototype.push = function (e) {
  this.elements.push(e);
};

//creating a pop function
Stack.prototype.pop = function () {
  return this.elements.pop();
};

//creating a function to check whether the stack is empty or not
Stack.prototype.isEmpty = function () {
  return this.elements.length === 0;
};

//creating a function to check the size of the stack
Stack.prototype.size = function () {
  return this.elements.length;
};

//creating a new stack object
let stack = new Stack();

//example
stack.push(12);
stack.push(10);
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());
