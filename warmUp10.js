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
	
	
