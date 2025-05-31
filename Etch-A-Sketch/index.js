const cont = document.querySelector(".container");
console.log(cont);

function create(num) {
	for (var i = 0; i < num * num; i++) {
		var child = document.createElement("div");
		child.classList.add("square");
		child.style.width = 875 / num + "px";
		child.style.height = 875 / num + "px";
		cont.appendChild(child);
	}
	all = document.querySelectorAll(".square");
	all.forEach((el) => {
		el.addEventListener("mouseover", function (e) {
			// console.log(el);
			el.style.backgroundColor = "Black";
		});
		el.addEventListener("mouseout", function (e) {
			// console.log(el);
			setTimeout(() => {
				el.style.backgroundColor = "White";
			}, 100);
			// el.style.backgroundColor = "White";
		});
	});
}

function start() {
	create(prompt("How many squares in the Etch-A-Sketch?: "));
}
