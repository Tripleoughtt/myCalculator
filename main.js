$(document).ready(function(){
	var inputField = $('#calculate');
	var num1 = ""
	var num2 = ""
	var modifier = ""
	var result = ""

	$("#multiply").on('click', function(){
		if (!num2){
			num1 = parseInt(inputField.value)
			inputField.value = undefined
			console.log(num1)
			modifier = "*"
		} else {
			num2 = inputField.value
			console.log(num2)
		}

	});

	// 	switch (modifier){
	// 		case modifier === "+":
	// 			result = num1 + num2
	// 			num1 = result
	// 			num2 = ""
	// 			$('#calculate').val(result)
	// 			break;
	// 		case modifier === "*":
	// 			result = num1 * num
	// 			num1 = result
	// 			num2 = ""
	// 			console.log('hello')
	// 			$('#calculate').val(result.toString())
	// 			break;
	// 		case modifier === "÷":
	// 			result = num1 / num2
	// 			num1 = result
	// 			num2 = ""
	// 			$('#calculate').val(result)
	// 			break;
	// 	}

	

	$('#equals').on('click', function(){
		if(!num2){
			num2 = parseInt(inputField.value)
		}

		if(modifier === '*'){
			result = num1 * num2
			num1 = result
			num2 = ""
			console.log('hello')
			$('#calculate').val(result.toString())
		} else if (modifier === '-') {
			result = num1 - num2
			num1 = result
			num2 = ""
			console.log('hello')
			$('#calculate').val(result.toString())
		} else if (modifier === '÷'){
			result = num1 / num2
			num1 = result
			num2 = ""
			console.log('hello')
			$('#calculate').val(result.toString())
		} else if (modifier === '+'){
			
		}

	$('#divide').on('click', function(){
		if (!num2){
			num1 = parseInt(inputField.value)
			console.log(num1)
			inputField.value = undefined
			modifier = "÷"
		}

	});
	})

	$('#subtract').on('click', function(){
		if (!num2){
			num1 = parseInt(inputField.value)
			inputField.value = undefined
			console.log(num1)
			modifier = "-"
			// num1 = parseInt(inputField.value)
			// console.log(num1)
			// inputField.val("")
			// modifier = "-"
		}

	});

	$('#negate').on('click', function(){


	});

	var clear = $('#clear').on('click', function(){
		inputField.value = undefined

	});
	
	$('.number').on('click', function(){
		var num = $(this).text();
		console.log(typeof(num))
		console.log(inputField.value)
		if (inputField.value === undefined){
			inputField.value = num
		}
		else {inputField.value += num}
			$('#calculate').val(inputField.value)
	})


})