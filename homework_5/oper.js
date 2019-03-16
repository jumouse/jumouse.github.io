var reg = new RegExp('^[0-9]+$');
function isNumber(text) {
	return reg.test(text);
}

function sum() { 
	var x = parseFloat(prompt("Введите первое число:",""));
	if (!isNumber(x)) {
		alert('Это не число!');
	}
	else {
		var y = parseFloat(prompt("Введите второе число:","")); 
		if (!isNumber(y)) {
			alert('Это не число!');
		}
		else {
			var s = x + y;
			document.write("\<H3>"+x+" + "+y+" = "+s+"\</H3>");
		}
	}
} 

function sub() { 
	var x = parseFloat(prompt("Введите первое число:",""));
	if (!isNumber(x)) {
		alert('Это не число!');
	}
	else {
		var y = parseFloat(prompt("Введите второе число:","")); 
		if (!isNumber(y)) {
			alert('Это не число!');
		}
		else {
			var r = x - y;
			document.write("\<H3>"+x+" - "+y+" = "+r+"\</H3>");
		}
	}
}  

function mul() { 
	var x = parseFloat(prompt("Введите первое число:",""));
	if (!isNumber(x)) {
		alert('Это не число!');
	}
	else {
		var y = parseFloat(prompt("Введите второе число:","")); 
		if (!isNumber(y)) {
			alert('Это не число!');
		}
		else {
			var m = x * y;
			document.write("\<H3>"+x+" * "+y+" = "+m+"\</H3>");
		}
	}
} 

function div() { 
	var x = parseFloat(prompt("Введите первое число:",""));
	if (!isNumber(x)) {
		alert('Это не число!');
	}
	else {
		var y = parseFloat(prompt("Введите второе число:","")); 
		if (!isNumber(y)) {
			alert('Это не число!');
		}
		else {
			if (y != 0) {
				var d = x / y;
				document.write("\<H3>"+x+" : "+y+" = "+d+"\</H3>");
			}
			else {
				alert ("Делить на ноль нельзя!");
			}
		}
	}
} 