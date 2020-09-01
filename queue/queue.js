class Queue {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  shift() {
    if (!this.isEmpty()) {
      const ele = this.data[0];
      this.data.splice(0, 1);
      this.top -= 1;
      return ele;
    }
    throw new Error('Queue is empty');
  }

  push(ele) {
    this.data.splice(this.top, 0, ele);
    this.top += 1;
    return this.data;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.data[0];
    }
    throw new Error('Queue is empty');
  }

  length() {
    return this.top;
  }

  isEmpty() {
    return this.top === 0;
  }
}
