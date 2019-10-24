 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 
 function range(start, end) {
	var acc = [];
		for ( var i = start ; i < end; i++){
		acc.push(i);
	}
	return acc;
}
//
 function each(coll, f) {
    for (var i= 0; i<coll.length; i++) {
      f(coll[i], i);
    }
}
//
 function reduce(array, f, start) { 
    var acc = start; 
     each(array, function(element) { 
       acc = f(acc, element); 
});
     return acc;
   }
 		
//

function mult(n) {
 	return reduce(range(1, n), function(x, num) {
 		return x * num;
 	},n);
 
}


// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

function repeat(n) {
	var str = range(1, n).join(' ');
	console.log(str)
	var str1 = '';
	var i = 2;
	while ( i <= n) {
		str1 = str1 + str[i]+' '+str[i];
		console.log(str1)
		i++; 
	}
	return str1;

}