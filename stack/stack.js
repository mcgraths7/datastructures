class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(ele) {
    this.data[this.top] = ele;
    this.top += 1;
    return this.data;
  }

  pop() {
    if (!this.isEmpty()) {
      const ele = this.data[this.top - 1];
      this.data.splice(this.top - 1, 1);
      this.top -= 1;
      return ele;
    }
    throw new Error('Stack is empty');
  }

  peek() {
    if (!this.isEmpty()) {
      return this.data[this.top - 1];
    }
    throw new Error('Stack is empty');
  }

  isEmpty() {
    return this.top === 0;
  }

  length() {
    return this.top;
  }
}
