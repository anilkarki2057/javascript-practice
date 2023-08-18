//1.Write a program to sum values of an array.
//using for loop
/*const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (i = 0; i <= myArray.length - 1; i++) {
  sum += myArray[i];
  console.log(sum);



}*/
//with for of loop accessing all the elements of an array

/*const myArray = [1, 2, 4, 5, 6, 8, 9];
let sum = 0;
for (let number of myArray) {
  console.log((sum += number));
}*/

// using forEach method

/*const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
numbers.forEach((number) => {
  console.log((sum += number));
});*/

//using map method

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
numbers.map((number) => {
  console.log((sum += number));
});*/

// using reduce method

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.reduce((sum, currentValue) => {
  return (sum += currentValue);
}, 0);
console.log(result);*/

//2.Write a program to remove a specific element from an array.
