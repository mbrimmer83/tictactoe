var counter = new Counter();

Counter.prototype.count = function () {
  this.i++;
  return this.i;
}
function Counter() {
  this.i = 0;
}

console.log(counter.count());
