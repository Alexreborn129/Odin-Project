function pc_pick() {
	console.log("called");
	document.querySelector("#pc-score").innerText =
		Number(document.querySelector("#pc-score").innerText) + 1;
	if (Number(document.querySelector("#pc-score").innerText) >= 5) {
		alert("PC won!");
		document.querySelector("#pc-score").innerText = "0";
		document.querySelector("#user-score").innerText = "0";
	}
}

function user_pick() {
	console.log("called");
	document.querySelector("#user-score").innerText =
		Number(document.querySelector("#user-score").innerText) + 1;
	if (Number(document.querySelector("#user-score").innerText) >= 5) {
		alert("PC won!");
		document.querySelector("#user-score").innerText = "0";
		document.querySelector("#pc-score").innerText = "0";
	}
}
function randomPick() {
	rng = Math.round(Math.random() * 3);
	switch (rng) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
	}
}

btns = document.querySelectorAll("button");

btns.forEach((el) =>
	el.addEventListener("click", function () {
		var user = el.id;
		var pc = randomPick();
		if (user === pc) {
			return 0;
		} else if (user == "rock" && pc == "paper") {
			// pc wins
			pc_pick();
		} else if (user == "rock" && pc == "scissors") {
			user_pick();
			// user wins
		} else if (user == "paper" && pc == "rock") {
			user_pick();
			//user wins
		} else if (user == "paper" && pc == "scissors") {
			// pc wins
			pc_pick();
		} else if (user == "scissors" && pc == "rock") {
			pc_pick();
		} else if (user == "scissors" && pc == "paper") {
			user_pick();
			// user wins
		}
	})
);
