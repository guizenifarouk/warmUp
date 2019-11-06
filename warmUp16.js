// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function instances(string ) {
	var array = string.split('');						// i splited the string to an array
	var arr = [];
	var result;
	for(var i = 0 ; i < array.length; i++) {			// i wanted to check if ther are any letters appearing many times
		for(var j = 1 ; j < array.length-1 ; j++) {
			if(array[i] === array[j]){
			arr.push(array[i]);							// if there is we push one of them to an array and we splice them both from the original array
			array.slice(i, 1);	
			array.slice(j, 1);							// then i compare the length of the new array with the length of the old array and i interpret the result 
			}
			if (string.length !== arr.length) {
				result = 0 ;
			}
			if (string.length === arr.length) {
				result = 1;
			}
			if(arr.length === (2*string.length)) {
				result = 2;
			}
//console.log(arr)
//console.log(array)

		}
			
	}
	return result;
} 