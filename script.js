window.onload = (event) => {
	fetch('https://raw.githubusercontent.com/tareu/texts/refs/heads/main/texts.txt')
		.then(response => response.text())
		.then((data) => {
			document.getElementById("div2").innerHTML = data;
		})
	setTime();
};

function setTime() {
	const d = new Date();
	document.getElementById("div1").innerHTML = d;
	setTimeout(setTime, 1000);
}

