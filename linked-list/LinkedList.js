class Node {
  constructor(value) {
    this.value = value;      // Value stored in this node
    this.next = null;        // Reference to the next node in the list
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;     // Points to the first node
    this.tail = newNode;     // Points to the last node
    this.length = 1;         // Tracks the number of nodes in the list
  }

  // Print all values in the list
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  // Print the value of the head node
  getHead() {
    console.log("Head:", this.head ? this.head.value : "null");
  }

  // Print the value of the tail node
  getTail() {
    console.log("Tail:", this.tail ? this.tail.value : "null");
  }

  // Empty the list
  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node to the end of the list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove the last node and return it
  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // Add a node to the beginning of the list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove the first node and return it
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  // Convert the list to an array of values
  toArray() {
    const values = [];
    let temp = this.head;
    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }
    return values;
  }

  // Insert a node at a given index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  // Reverse the entire list
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }

  // Return the middle node using the fast/slow pointer approach
  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // Detect if a loop exists in the list
  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) return true;
    }
    return false;
  }

  // Find the k-th node from the end of the list
  findKthFromEnd(k) {
    if (k < 0 || this.head === null) return null;
    let fast = this.head;
    let slow = this.head;
    for (let i = 0; i < k; i++) {
      if (fast === null) return null;
      fast = fast.next;
    }
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }

  // Remove duplicate values using a Set
  removeDuplicates() {
    let prev = null;
    let current = this.head;
    const seen = new Set();
    while (current) {
      if (seen.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        seen.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }

  // Convert binary number (as list of 0s and 1s) to decimal
  binaryToDecimal() {
    let sum = 0;
    let current = this.head;
    while (current) {
      sum = (2 * sum) + current.value; // Shift left and add new bit
      current = current.next;
    }
    return sum;
  }
}
