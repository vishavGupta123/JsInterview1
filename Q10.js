//creating class for node object
class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

//creating a class for Linkedist object
class LinkedList {
  constructor() {
    this.head = null;
  }
}

//creating a linkedList object
let list = new LinkedList();

//adding a function to the Linkedlist class
LinkedList.prototype.insertAtBeginning = function (data) {
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  return this.head;
};

LinkedList.prototype.insertAtEnd = function (data) {
  let newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

//find the index of given node at a particular index
LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};
// The insertAt() function contains the steps to insert a node at a given index.
LinkedList.prototype.insertAt = function (data, index) {
  // if the list is empty i.e. head = null
  if (!this.head) {
    this.head = new Node(data);
    return;
  }
  // if new node needs to be inserted at the front of the list i.e. before the head.
  if (index === 0) {
    this.head = new Node(data, this.head);
    return;
  }
  // else, use getAt() to find the previous node.
  const previous = this.getAt(index - 1);
  let newNode = new Node(data);
  newNode.next = previous.next;
  previous.next = newNode;

  return this.head;
};

//adding delete a node from beginning function
LinkedList.prototype.deleteFromBeginning = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
};

//adding a delete from last function in Linked list class
LinkedList.prototype.deleteFromLast = function () {
  if (!this.head) {
    return;
  }
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let t1 = this.head;
  let t2 = null;
  while (t1.next != null) {
    t2 = t1;
    t1 = t1.next;
  }
  t2.next = null;
};

//example
list.insertAtBeginning(24);
list.insertAtEnd(23);
list.insertAtEnd(22);
list.insertAtEnd(21);

let tail = list.head;
console.log("Before Deleting");
while (tail != null) {
  console.log(tail.data);
  tail = tail.next;
}

list.deleteFromLast();
tail = list.head;
console.log("After deleting");
while (tail != null) {
  console.log(tail.data);
  tail = tail.next;
}
