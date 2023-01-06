var fbGame = [];
var addNumber = 1;

function fizzBuzz(){
	
	while(addNumber <= 100){

		if(addNumber % 5 === 0 && addNumber % 3 === 0){
			fbGame.push("FIZZBUZZ")
		} else if(addNumber % 3 === 0){
			fbGame.push("Fizz")
		} else if(addNumber % 5 === 0){
			fbGame.push("BUZZ")
		} else{
			fbGame.push(addNumber);
		}

	addNumber++

	}

	console.log(fbGame);
}

fizzBuzz();

