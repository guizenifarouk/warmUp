console.log('hi')

var count = 0;
$('#b1').on('click', function(){							
	if(count % 2 === 0){					
	$('#list').append(('<li class ="class1">'+$('#txt1').val()+'</li>'));		
	count++;													
	} else {
	$('#list').append(('<li class ="class2">'+$('#txt1').val()+'</li>'));		
	count++;
	}
	})
// i tried to use .attr and .addClass but each time the class is overiding , so every time i add an li i add his class at the same time 
	
	
