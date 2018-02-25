class Sorter {

  constructor() {
    this.arr = [];
    this.compare = function(a, b) {return a - b};
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
      var sortNum = (a,b) => a-b;
      indices.sort(sortNum);
      var temp = [];
      for(let i = 0; i<indices.length; i++){
          temp.push(this.arr[indices[i]]);
      }
      temp.sort(this.compare);

      for(let i = 0; i<indices.length; i++){
          this.arr.splice(indices[i], 1, temp[i]);
      }
  }

  setComparator(compareFunction) {
      this.compare = compareFunction;
  }
}

module.exports = Sorter;