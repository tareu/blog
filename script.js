
window.onload = (event) => {
        var div1= document.createElement("div");
        div1.style.background = "powderblue";
        div1.id = "div1"
        var div2 = document.createElement("div");
        div2.style.whiteSpace = "pre-line";
        div2.id = "div2"
        var div3 = document.createElement("div");
        div3.innerHTML = "<br>";
        div3.id = "div3"
        document.getElementById("main").appendChild(div1);
        document.getElementById("main").appendChild(div3);
        document.getElementById("main").appendChild(div2);

	fetch('https://raw.githubusercontent.com/tareu/texts/refs/heads/main/texts.txt')
		.then(response => response.text())
		.then((data) => {
			document.getElementById("div2").innerHTML = data;
		})

	setTime();
};

function setTime() {
	const d = new Date();
	document.getElementById("div1").innerHTML = d.toString();
	setTimeout(setTime, 1000);
}

