//This is a project that determines who buys lunch

var names = ["Lasc", "Ebrave", "Kalu", "Femi", "Dada"];

var pick = Math.random() * 5;

var value = Math.floor(pick);

function buyLunch(){
	console.log(names[value] + " will buy us lunch today");
}

buyLunch();
