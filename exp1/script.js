// Simple CRUD operations on an array

let fruits = ["Apple", "Banana", "Mango"];

console.log("Initial fruits:", fruits);

fruits.push("Orange");
console.log("After Adding Orange:", fruits);

let index = fruits.indexOf("Banana");
if (index !== -1) {
  fruits[index] = "Grapes";
}
console.log("After Updating Banana to Grapes:", fruits);

index = fruits.indexOf("Mango");
if (index !== -1) {
  fruits.splice(index, 1); // remove 1 element at found index
}
console.log("After Deleting Mango:", fruits);
