function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function() {
    return this.size === 0;
}

SinglyLinkedList.prototype.insert = function(value) {
    if(this.head == null) {
        this.head = new SinglyLinkedListNode(value);
    }
    else {
        let temp = new SinglyLinkedListNode(value);
        temp.next = this.head;
        this.head = temp;
        // let temp = this.head;
        // this.head = new SinglyLinkedListNode(value);
        // this.head.next = temp;
    }
    this.size++;
}

SinglyLinkedList.prototype.remove = function(value) {
    let currentHead = this.head;
    if(currentHead.data === value) {
        this.head = this.head.next;
        this.size--;
    }
    else {
        let prev = currentHead;
        while(currentHead.next) {
            if(currentHead.data === value) {
                prev.next = currentHead.next;   
                prev = currentHead;
                currentHead = currentHead.next;
                break;
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        if(currentHead.data === value) {
            prev.next = null
        }
        this.size--;
    }
}

SinglyLinkedList.prototype.find = function(value) {
    let currentHead = this.head;
    while(currentHead.next) {
        if(currentHead.data === value) {
            return true;
        }
        currentHead = currentHead.next;
    }
    if(currentHead.data === value) {
        return true;
    }
    return false;
}

let sll = new SinglyLinkedList();
sll.insert(1);
sll.insert(12);
sll.insert(12);
sll.find(1)