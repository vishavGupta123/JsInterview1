//implementing the queue in the javascript
//creating a queue class with empty array

function Queue() {
  this.elements = [];
}
//creating a method inside the queue class to enqueue an element
Queue.prototype.enqueue = function (e) {
  this.elements.push(e);
};

//creating a method to dequeue an element
Queue.prototype.dequeue = function () {
  //shift function will remove the
  return this.elements.shift();
};

//creating a function to check whether the Queue is empty or not
Queue.prototype.isEmpty = function () {
  return this.elements.length === 0 ? true : false;
};

//creating a function to return first element element in the queue
Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
};

//creating a function to check the length of the queue
Queue.prototype.length = function () {
  return this.elements.length;
};

//creating a queue object
let q = new Queue();

//example
for (let i = 1; i <= 10; i++) {
  q.enqueue(i);
}
console.log(q.peek());

// while(!q.isEmpty()){
//     console.log(q.dequeue());
// }
