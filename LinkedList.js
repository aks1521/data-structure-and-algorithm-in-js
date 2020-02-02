/*jshint esversion: 6 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {

        this.head = {
            value: value,
            next: null
        };
        this.tell = this.head;
        this.length = 1;
    }

    printLinkedList() {
        let listArray = [];
        let index = 0;
        let currNode = this.head;

        while (currNode !== null) {
            listArray.push(index + ":" + currNode.value + "( Next:" + this.ifNotNull(currNode.next) +")");
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
        this.tell = newnode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newnode = new Node(value);
        newnode.next = this.head;
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
        let prevNode = this.travesalToIndex(index - 1);
        const newnode = new Node(value);
        newnode.next = prevNode.next;
        prevNode.next = newnode;
        this.length++;
    }

    delete(index) {
        let prevNode = this.travesalToIndex(index - 1);
        prevNode.next = prevNode.next.next;
        this.length--;
    }

}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 90);
console.log(myLinkedList.printLinkedList());
myLinkedList.delete(3);
console.log(myLinkedList.printLinkedList());