let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];
let names = users.map((item) => item.name);
let last = users.map((item) => item.surname);

let usersMapped = [
	{ fullName: [names[0]] + " " + [last[0]], id: 1 },
	{ fullName: [names[1]] + " " + [last[1]], id: 2 },
	{ fullName: [names[2]] + " " + [last[2]], id: 3 },
];

/*
CORRECT/BETTER CODE
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
*/

ß;
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
