// 1-using + operator combine your partner first and last name .
var partner = 'dhia'+' '+'raissi';
// 2-find if the number 13 is a multiple of 3 or not.
function multiple(n){
if(n % 3 ===0){
	return n +' is multiple of 3';
}
return n + ' is not mulitple of 3';
}
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function averageAge(array){
	var sum = 0 ;
	for( var i = 0 ; i < array.length; i++){
		sum = sum + array[i]
	}
	return sum/array.length
}
// 4-calculate your age in seconds.
function myAge(age) {
	return age*365*24*60*60 +' seconds'
}

// your code is here