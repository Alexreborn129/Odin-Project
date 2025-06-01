var first = 0;
var firstDone = false;
var second = 0;
var funt = "";

function operate(op) {
	console.log(op, first, second);
	switch (op) {
		case "+":
			console.log("kjahdsfaskhjlf");
			var done = first + second;
			return Number(done);
			break;
		case "-":
			console.log("kjahdsfaskhjlf");
			return first - second;
			break;
		case "X":
			console.log("kjahdsfaskhjlf");
			return first * second;
			break;
		case "/":
			console.log("kjahdsfaskhjlf");
			return first / second;
			break;
	}
}

btns = document.querySelectorAll(".number");

btns.forEach((el) => {
	el.addEventListener("click", function (e) {
		if (!firstDone) {
			if (first != 0) {
				first = Number(String(first) + String(el.innerText));
				console.log(first);
				document.getElementById("result").innerHTML = first;
			} else {
				first = el.innerText;
				document.getElementById("result").innerHTML = first;
				console.log(first);
			}
		} else {
			second = Number(String(second) + String(el.innerText));
			console.log(first);
			document.getElementById("result").innerHTML = second;
		}
	});
});

fncts = document.querySelectorAll(".func");

fncts.forEach((el) => {
	el.addEventListener("click", function (e) {
		if (el.innerText != "AC") {
			if (!firstDone) {
				firstDone = true;
				funt = el.innerText;
				// console.log(funt, first, second);
			} else if (firstDone) {
				// console.log(funt, first, second);
				first = Number(first);
				second = Number(second);
				funt = String(funt);
				var answer = operate(funt);
				document.getElementById("result").innerHTML = answer;
				console.log(operate(funt));
				first = answer;
				funt = "";
				second = 0;
				firstDone = false;
			}
		} else {
			funt = "";
			second = 0;
			first = 0;
			answer = 0;
			firstDone = false;
			document.getElementById("result").innerHTML = 0;
		}
	});
});
