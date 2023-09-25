//your code here!
const scrollC = document.getElementById("infi-list")

let i=0;
function addOneItem() {
	const li = documnet.createElement("li");
	li.innerText = `Items ${++i}`;
	scrollC.appendChild(li);
}

for (let i = 0; i < 10; i++) {
	addOneItem();
}

// code is in jira clone 2 >>> 2:59