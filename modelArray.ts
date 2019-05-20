

export class ArrModel {
  arr: Array<any>;
  id: string;
  constructor(key, data) {
    this.id = key;
    this.arr = data;
  }
  findOne(id) {
    return this.arr.find(item => item[this.id] === id);
  }
  findOneIndex(id) {
    return this.arr.findIndex(item => item[this.id] === id);
  }
  findAll() {
    return this.arr;
  }
  create(plain) {
    this.arr.push(plain);
  }
  update(id, plain) {
    const index = this.findOneIndex(id);
    this.arr[index] = plain;
  }
  destory() {
    this.arr = [];
  }
}
