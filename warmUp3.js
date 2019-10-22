// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females =['farah', 'sarah', 'rim'];
var males =['zied', 'dhia', 'maher'];
var instructors =['seif', 'youssef', 'matt'];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array){
		if(array.length % 2 !==0){
			return array[(array.length-1)/2]
		}
		else {
			return array[array.length/2]+ ' and '+ array[(array.length/2)-1];
		}

<<<<<<< HEAD
<<<<<<< HEAD
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multipliedByTwoForEvenIndexes(array){
	
	for(var i = 0; i< array.length; i++){
		if(i % 2 ===0){
			array[i]=array[i]*2;
		}
	}
	return array
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> bc4abbbe44759eb1f72f2abcc0629fd792b435cd
