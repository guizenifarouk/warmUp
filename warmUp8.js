//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(array1, array2) {
		for (var i = 0 ; i < array2.length; i++) { // i wanted to iterate over the second array
			if(array1.indexOf(array2[i]) !== -1 ){ // if the element in array2 is found in array1 
				array2.splice(i, 1)				  // delete it
			}
									
		}
			if(array2.length === 0){				// if the second array is empty so all af his element are found in the first element so return true
				return true;
			}
			return false							// else return false
	}

