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







