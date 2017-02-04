// var userinput = [];
// var remainingguesses;
// var wordlist= ["princess", "belle", "ariel", "cinderella"];
// var letteramount;
// //var display.word = [];

// function connecttoletterposition(word, letter)
// {
// var letterposition = [];
// var starray = word.split('');
// for (i=0; i< starray.length; i++){
// 	if (starray[i] === letter){
// 	console.log("MATCH at: " +i)
// 	letterposition.push(i);
// 	}
// }
// 	return letterposition;
// 	};

// function letterstatus(letter){
// 	for (i=0; i<userinput.length; i++)
// 		{ if (letter === userinput[i])
// 			{
// 			return true;
// 		}
// 	}
// 	return false;
// };

// document.onkeyup=function(event){
// 	var userguess = event.key;
// 	console.log ("User pressed: "+ userguess);
// 	if (letterstatus(userguess)===true){
// 		console.log("Letter already used: "+ userguess);
// 		return;
// 	}
// 	userinput.push(userguess); 
// };



// //---------------------------------------------------------------------------

// var userinput = [];
// var remainingguesses;
// //var this.letter;
// //var display.letter = [];

// function connecttoletterposition(letter)
// {
// var princessletters= ["p","r","i","n","c","e","s","s"];
// var wrongletterposition = [];
// var rightletterposition = [];
// document.onkeyup=function(event){
// 	var userguess = event.key;
// 	for (i=0; i< princessletters.length; i++){
// 	if (princessletters[i] === userguess)
// 	{
// 	rightletterposition.push(i);
// 	}
// 	else{
// 	wrongletterposition.push(i);
// 	}
// }
// }


// function letterstatus(letter){
// 	for (i=0; i<userinput.length; i++)
// 		{ if (letter === userinput[i])
// 			{
// 			return true;
// 		}
// 	}
// 	return false;
// }

// document.onkeyup=function(event){
// 	var userguess = event.key;
// 	console.log ("User pressed: "+ userguess);
// 	if (letterstatus(userguess)===true){
// 		console.log("Letter already used: "+ userguess);
// 		return;
// 	}

// function fillWordDiv (wordToUse) {
// 	this.word = "";
// 	for(var i=0; i<princessword.list[wordToUse].length; i++)
// 	{
// 	this.word += "_ ";
// 		}
// 	//we want to write to the word div here
// 	document.getElementById('princessword').innerHTML = userguess;
// 	}
// }
// };

// how to switch from round to round...
//1) reset chosen word
//2) reset any counters for wrong guesses
//3) reset correct options
//4) reset display of word and reset display of the image

var princess = ["belle"];
var correctoptions= princess[0].split("");

var userpoints=0;
var lives=5;

document.onkeyup = function(event) {

    var userGuess = event.key;

    if (correctoptions.search(userGuess) >= 0){
    	userpoints++; 
    	document.getElementById("princessword").innerHTML = userGuess;
    }  
    else (
    	lives=--; 
    	document.getElementById("letters-guessed").innerHTML = lives;
    	)
}
