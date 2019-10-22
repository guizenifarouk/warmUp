// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


function makeClassmates(name, nationality, age, sexe){

	return  {
		name:name,
		nationality:nationality,
		age:age,
		sexe:sexe
	
	}
}
var classmate1= makeClassmates('dhia','tunisian','22', 'male');
var classmate2= makeClassmates('najeh', 'tunisian', '30', 'male');
var classmete3= makeClassmates('maher','tunisian','26','male');

var classemates = [classmate1, classmate2, classmate3];

function displayFriend(classmate) {
	return classmate.name+' '+classmate.nationality+' '+classmate.age+' '+classmate.sexe;
}
//

function addFriend(classmate) {
   classmates.push(classmate);
   return classmates;
}


//
function nbOfMale(classemate) {
	var nbr = 0;
	for (var i = 0 ; i < classmate.length ; i++){
		if(classmate[i].sexe === 'male') {
			nbr++
		}
	}
	return nbr;
}
//
function searchMates(array, quary) {
   for (var i = 0; i < array.length; i++){
       if (array[i].indexOf(quary) !== -1){
           return displayFriend(array[i]);
       }
   }
  return quary + 'not found'
}

