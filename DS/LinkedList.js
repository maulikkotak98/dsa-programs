class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // print list
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  // append
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // traverse to index
  traverse(index) {
    let currNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  // insert at index
  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length - 1) {
      this.append(value);
      return;
    }
    const prev = this.traverse(index - 1);
    const curr = prev.next;
    prev.next = newNode;
    newNode.next = curr;
    this.length++;
  }

  // delete from beginning
  deleteFirstItem() {
    if (this.length === 1) {
      console.log("Warning: Linked  list has only one item.");
      return;
    }
    this.head = this.head.next;
    this.length--;
  }

  // delete last item
  deleteLastItem() {
    if (this.length === 1) {
      console.log("Warning: Linked  list has only one item.");
      return;
    }
    const index = this.length - 2;
    const prev = this.traverse(index);
    prev.next = null;
    this.tail = prev;
    this.length--;
  }

  //delete with index
  delete(index) {
    if (index === 0) {
      deleteFirstItem();
    }
    if (index >= this.length - 1) {
      deleteLastItem();
    }
    const prev = this.traverse(index - 1);
    const curr = prev.next.next;
    prev.next = curr;
    this.length--;
  }
}

const l1 = new LinkedList(5);
l1.append(10);
l1.append(12);
l1.prepend(99);
l1.insert(0, 11);
l1.insert(6, 22);
l1.insert(2, 100);
l1.printList();
l1.deleteFirstItem();
l1.deleteLastItem();
l1.delete(2);
l1.printList();
