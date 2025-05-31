function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age);
}
// returnes positive if a is bigger (a goes first), negative if b is bigger (b goes first) and does not change if they are the same

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
