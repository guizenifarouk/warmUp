// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

// function reverse(string) {
// 	var str = string.split(' ').reverse().join(' ') ;

// 	return str;
// 	

function reverse(string) {
	var array = string.split(' ')
	var arr = [];
	for(var i = 0 ; i < array.length ; i++) {
		arr.unshift(array[i])
	}
	return arr.join(' ');
}
// i pushed and i thought we aren't allowed to use only the reverse
 function reverse(string) {			
 	var result ="";
 	var x = ""
 	for(var i = string.length-1; i <= 0; i--) {				// i tired to loop from the end of the string to the beginning
 		x = string[i];										//then i stored the last element in a variable
 		result += x											//then i push to the result the last variable
 	}
 	return result;
 }







