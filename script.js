var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiant");
var randomButton = document.getElementById("random");

// Listener function. Set gradiant of background using the current color input values. Listens to color input value change event. 
function setGradiant() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	randomButton.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// Listener function. Set random value of color inputs values. Set gradiant of background. Listens to random button click event. 
function setRandomGradiant() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradiant();
}


// Get random hex color
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Add event listener to color input. Call listener function to set the gradiant of background after changing the color input value
color1.addEventListener("input", setGradiant);
color2.addEventListener("input", setGradiant);

// Add event listener to button. Call listener function to set random gradiant of background after clicking button.
randomButton.addEventListener("click", setRandomGradiant);

// Set the gradiant of background when loading the page
setGradiant();

