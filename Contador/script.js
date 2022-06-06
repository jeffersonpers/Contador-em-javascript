var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
	//console.log("test");
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
};
function decrement(){
//	console.log("test2");
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
};