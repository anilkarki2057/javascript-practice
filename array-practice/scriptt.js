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

//3.Write a program to find the maximum and minimum value of an array

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray = [];
newArray = numbers.sort((a, b) => {
  return a - b;
});
console.log(
  `the maximum value of an array is ${
    newArray[newArray.length - 1]
  } and minimum value is ${newArray[0]} `
);*/

//Write a program to find the second largest element in an array.

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray = [];
newArray = numbers.sort((a, b) => {
  return a - b;
});
console.log(
  `The second leargest element in an array is ${newArray[newArray.length - 2]}`
);*/

//Write a Java program to find the sum of the two elements of a given array equal to a given integer.
//Eg: Sample array: [1,2,4,5,6] Target value: 6.

/*const twoSum = (number, target) => {
  for (i = 0; i <= number.length - 1; i++) {
    for (j = i + 1; j <= number.length - 1; j++) {
      if (number[i] + number[j] === target) {
        return [i, j];
      }
    }
  }
};
const ans = twoSum([1, 2, 3, 4, 5, 6], 6);
console.log(ans);

// nested array destructuring
const nested = [1, 2, 3, [4, 5, 6]];
const [i, j, , [k, l, m]] = nested; //we can give space to skip the value
console.log(i, j, k, l, m);

//default values
const [p = 1, q = 1, r = 1] = [5, 6];
console.log(p, q, r);

// destructuring objects, provide the variable name that exactly matches the property name
//object destructuring is mostly used when the data is come from api as the data received is in the form of object
const person = {
  //creating an object name person
  firsName: "anil",
  lastName: "karki",
  job: "no job",
};
const { firsName, lastName, job } = person;
console.log(firsName, lastName, job);
//to give new variable name
const { firsName: namee, lastName: last, job: statuss } = person;
console.log(namee, last, statuss);
//mutating a variable
let a = 12;
let b = 45;
const obj = { a: 23, b: 47, c: 8 };
({ a, b } = obj);
console.log(a, b);

//nested object destructuring

const details = {
  name: "anil karki",
  contact: {
    phone: "9869949949",
    email: "anilkakri@gmail.com",
  },
};
const {
  contact: { phone, email },
} = details;
console.log(phone, email);
//for giving new variable name simply do

const {
  contact: { phone: phn, email: eml },
} = details;
console.log(phn, eml);
//in object destructuring the order doesnot matter

//spread operator(...)
const arr = [1, 2, 3, 4];
const newArray = [...arr, 5, 6, 7]; //taking all the elements of arr and write into new array
console.log(newArray);
console.log(...newArray); //this spread operator again unpack the array and give the individual elemats
// use of spread operator , this is used to pass multiple value to the function
//a.copy array, b.to join to array together,this is also works for object also
// Iterables:arrays,strings ,maps ,sets but not object
//for all the iterables spread operator can be applied
// spread operator works for object also althoug an object is not iterable
//using the above person object
const newPerson = { ...person, founder: "hello" };
console.log(newPerson);

// rest pattern and parameters ,it is in the left side of assignment operator
//same syntax as spread operator but does the opposite work
//this pack the value
const [e, f, ...others] = [1, 2, 3, 4, 5];
console.log(e, f, others);

//in objects
const student = {
  name: "anil karki",
  rollno: "1",
  faculty: "computer engineering",
};
const { name, ...newObject } = student;
console.log(name, newObject);

// in function it takes multiple arguments and  pack into single arrayadd(...numbers) {
let add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(1, 2);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7);

// short circuiting(&& and ||)
// they can use any data type , return any data type ,short circuiting
//in logical OR first ko value true vaya tei return garxa,aaru herda ni herdaina
console.log(3 || "anil");
console.log("" || "karki");
console.log(undefined || null);
//for and, first ko false vaya tei return garxa aarko condition herda ni herdaina
console.log(0 && "anil karki");
console.log(7 && "anil karki"); //2 tai true vaya second ko return garxa

//the nullish  coalesing operator ??.nullish values are null and undefinedd nor o or " "
console.log(0 ?? 10);
console.log(null ?? 10);
console.log(undefined ?? 30);
//yesma first ko null and undefined vaya second return garxa navaya first kai return garxa

//logical assignment operator
//for of loop
const dinner = ["rice", "pasta", "dal", "chamal", "roti", "chiya"];
const lunch = ["vegetables", "masu", "chiura"];
const menu = [...dinner, ...lunch];
for (const item of menu) console.log(item);
//to print index also
for (const item of menu.entries()) console.log(item);

//destructuring to print from 1
for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);

//Enhanced object literals

//optional chaining ?.
//if certain properties is not defined it returns undefined
const openingHours = {
  sun: {
    open: 9,
    close: 10,
  },
};
const reasturant = {
  name: "Classic nepal",
  location: "kathmandu",
  openingHours, //using above object as resturant object property
};
console.log(reasturant);
console.log(reasturant.openingHours.mon?.open); //yadi opening hour vitra mon xa vani matra open check gar navaya undefined return gar , if optional chainning is not use it will return error
//we can have multiple optional chainning
console.log(reasturant.openingHours?.mon?.open);
//it is also works for method
//Example: resturant.order?.(0,1)//yadi resturant object ma order method exist garya o and 1 value pass gar


// looping objects : object keys , values and entries
const person = {
  firstName: "Anil",
  lastName: "karki",
  status: "no job",
  qualification: "Graduated",
};
const perporties = Object.keys(person); //this gives the key of object
for (const per of perporties) console.log(per); //using loop to get individual key value
console.log(Object.values(person)); // this gives the value of an object
const entries = Object.entries(person); //loping whole object
console.log(entries);
for (const [key, value] of entries) console.log(`${key}: ${value}`); // in this way we can loop to the objects

//sets data structure
//set is collection of unique value
// set can hold mix data types
// syntax : new Set(iterable lekhne like array)
//there is no index in set
//set is iterable
const testSet = new Set([1, 2, 3, 1, 2, 3]);
console.log(testSet);
for (const x of testSet) console.log(x);
console.log("-----------------");
console.log(testSet.size); // to find the size of set
console.log(testSet.has(4)); // has is similat to the include method in an array
console.log(testSet.add(5));
testSet.delete(1);
console.log(testSet);
//testSet.clear();
//console.log(testSet);
const toArray = [...testSet]; //converting set to an array
console.log(toArray);
console.log(new Set("anil karki"));

//maps, map also return the value
//Now, the big difference between objects and maps
//is that in maps, the keys can have any type  ,  in objects  the keys are basically always strings.But in maps,
//we can have any type of key.It could even be objects, or arrays, or other maps.
const testMap = new Map();
console.log(testMap.set("firstName", "anil ")); //to add the key and value to the map
console.log(testMap.get("firstName")); //use to retrive the value , type mileko huna parxa retrive garda
console.log(testMap.has("firstName"));
const newMap = testMap.delete("firstName");
console.log(newMap);
console.log(testMap.size);

// iteration in map
//1. adding to map
const question = new Map([
  ["Question", "Which is your programming language"],
  [1, "javascript"],
  [2, "java"],
  [3, "c"],
  [4, "c++"],
]);
console.log(question);
// convert object to map
const person = {
  firstName: "Anil",
  lastName: "Karki",
  status: "No job",
  qualification: "Graduated",
};
console.log(Object.entries(person));
const objecttoMap = new Map(Object.entries(person)); //this is the step to convet object person to map
for (const [key, value] of objecttoMap) console.log(`${key}:${value}`); // [key,value] this is destructuring
for (const [key, value] of question) console.log(`${key}:${value}`); //iterating the question map
//convert map to array
console.log([...question]);
*/
// Working with strings

const myString = "Hello my name is anil karki";
console.log(myString.length);
console.log(myString.indexOf("a"));
console.log(myString.lastIndexOf("k"));
console.log(myString.indexOf("anil"));
console.log(myString.slice(16)); //16 bata start hunxa aani last saman janxa
console.log(myString.slice(0, myString.indexOf(" ")));
console.log(myString.slice(myString.lastIndexOf(" ") + 1));
console.log(myString.slice(-5)); //paxadi bata linako lagi - lagauna sakinxa
console.log(myString.toLowerCase());
console.log(myString.toUpperCase()); // upeercase and lower case doesnot require any arguments
const myName = "anil karki";
console.log(myName[0].toUpperCase() + myName.slice(1)); //to convert the name anil karki to Anil karki
const email = "   anilkarki@gmail.com \n";
console.log(email.trim());
//replacing
const myNamee = "Anil , don";
console.log(myNamee.replace("don", "karki").replace(",", ""));
// /anil/g yesto lekhiyo vani jata jata anil le replace hunxa
// methods that returns boolean ,  includes , startwith ,endwith
console.log(myNamee.includes("anil"));
console.log(myNamee.startsWith("An"));
console.log(myNamee.endsWith("on"));
console.log("a+very+nice+string".split("+")); //this split method gives the array
console.log("my name is Anil karki", .join("-"));