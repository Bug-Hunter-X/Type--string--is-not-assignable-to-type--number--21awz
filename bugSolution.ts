function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 0; // handle the case where inputs are not numbers
  }
  return a + b; 
}

function subtractSafe(a: any, b: any): number {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 0;// handle the case where inputs are not numbers
  }
  return a - b;
}

let result1 = addSafe(5, 3); // result1 is 8
let result2 = subtractSafe(10, 4); // result2 is 6
let result3 = addSafe("5", 3); // result3 is 0
let result4 = subtractSafe(10, "4"); // result4 is 0

console.log(result1, result2, result3, result4); // Output: 8 6 0 0