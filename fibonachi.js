// Fibonachi is a task that adds the last 2 values and push the result as the next value

function fibonachi(n){

	var fibGen = [];

	var num1 = [0];

	var num2 = [0, 1];

	if (n === 1){
		fibGen = num1;
	} else if (n === 2){
		fibGen = num2;
	} else{
		fibGen = num2;

		for (i = 2; i < n; i++){
		fibGen.push(fibGen[fibGen.length - 2] + fibGen[fibGen.length - 1]);
		}
	}
	
	console.log(fibGen);

}

fibonachi(12);
