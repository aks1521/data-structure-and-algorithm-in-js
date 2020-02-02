/*jshint esversion: 6 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;

    }
}

class DoublyLinkedList {
    constructor(value) {

        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tell = this.head;
        this.length = 1;
    }

    printLinkedList() {
        let listArray = [];
        let index = 0;
        let currNode = this.head;

        while (currNode !== null) {
            listArray.push(index + ":" + currNode.value + "( Next:" + this.ifNotNull(currNode.next) + " - Prev:" + this.ifNotNull(currNode.prev) + ")");
            currNode = currNode.next;
            index++;
        }
        return listArray;
    }

    ifNotNull(input) {
        if (input) {
            return input.value;
        }
        return " NA ";
    }

    append(value) {
        const newnode = new Node(value);
        this.tell.next = newnode;
        newnode.prev = this.tell;
        this.tell = newnode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newnode = new Node(value);
        newnode.next = this.head;
        this.head.prev = newnode;
        this.head = newnode;
        this.length++;
        return this;
    }

    travesalToIndex(index) {
        let currNode = this.head;
        let curIndex = 0;
        while (curIndex < index) {
            currNode = currNode.next;
            curIndex++;
        }
        return currNode;
    }

    insert(index, value) {
        const prevNode = this.travesalToIndex(index - 1);
        const newnode = new Node(value);
        const nextNode = prevNode.next;
        nextNode.prev = newnode;
        newnode.next = nextNode;
        newnode.prev = prevNode;
        prevNode.next = newnode;
        this.length++;
    }

    delete(index) {
        let prevNode = this.travesalToIndex(index - 1);
        let nextNode = prevNode.next.next;
        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        this.length--;
    }

}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 90);
console.log(myDoublyLinkedList.printLinkedList());
myDoublyLinkedList.delete(3);
console.log(myDoublyLinkedList.printLinkedList());
console.log(myDoublyLinkedList);