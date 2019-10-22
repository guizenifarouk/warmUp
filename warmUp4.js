// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
<<<<<<< HEAD
function reverse( string ) {
	var str =string.split('').reverse().join('');
	var count = 0;
	var i = 0 ;
	var str1='';
	while ( i < str.length) {
		str1+=count + str[i];
		count++;
		i++;

	}
	return  str1;

}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength( array ) {
	var arr = array[i];
	for(var i = 0 ; i < array.length ; i++){
		for(var j = 1 ; j < array.length ; j++)
		if(array[i].length=array[j].length){
			arr.push(array[j]);
		} else {
			arr.splice(j, 1);
		}

	}
	return arr;
}
=======


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
>>>>>>> bc4abbbe44759eb1f72f2abcc0629fd792b435cd
