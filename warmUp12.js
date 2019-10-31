/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
 function smallestAndLargest(string, range) {
 	
 	var array = string.split(''); //i chaged the string into an array
 	var arr1 = [];
 	var arr2 = [];
 	var arr3 = [];
 	var min = arr[0];
 	var max = arr [0];
 	for(var i = 0 ; i < range; i++){						// I tried to take the first elements until the range and pushed them to an other array separated by ,
 		arr1.push(array[i]+',')
 	}

 	for(var j = range; j < string.length;j++){				// then i tried to push in an other array the element from the range to the end of the array
 			arr2.push(array.slice(j, array.length))

 }
 	arr3 = arr1.concat(arr2);								// i made them 1 array

 	for( var t = 0 ; t < arr3.length; t++){					// finding the min
 		if(min>arr3[t]){
 			min = arr3[t];
 		}
 	}
 	for( var t = 0 ; t < arr3.length; t++){					// finding the max
 		if(max<arr3[t]){
 			min = arr3[t];
 		}
 	}
 	return 'The 10 numbers in this string are:'+'\n' + arr3.join(' ')+'\n'+'Therefore the range of numbers is from'+ min +'to' + max ;
 }


 // i didn't know how to make a range as the exercice asked , i'll try to solved in a better way at the self hacking time



