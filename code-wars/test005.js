function closeCompare(a, b, margin){
    if (margin === undefined) {
        return a - b;
    } else {
        return 0;
    }
  }
  
console.log(closeCompare(4, 5), -1)
console.log(closeCompare(5, 5), 0)
console.log(closeCompare(6, 5), 1)
console.log(closeCompare(-6, -5), -1)

console.log(closeCompare(2, 5, 3), 0)
console.log(closeCompare(8.1, 5, 3), 1)
console.log(closeCompare(1.99, 5, 3), -1)