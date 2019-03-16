var reg = new RegExp('^[0-9]+$');
function isNumber(text) {
	return reg.test(text);
}
function plosch() {
	var l = prompt("Введите длину окружности:","");
	var s = ((l * l)/(4 * Math.PI)).toFixed(2);
	if (l != null) {
		if (l.length === 0) {
			alert('Вы не задали длину окружности!');
		} else if (l < 0) {
			alert('Длина окружности не может быть отрицательным числом!');
		} else if (!isNumber(l)) {
			alert('Длина окружности должна быть числом!');
		} else {
			document.write("\<H3>Площадь круга, ограниченного окружностью длины "+l+", равна "+s+" ед.кв."+"\</H3>");
		}
	} else {
		document.write("\<H3>\<FONT COLOR='Red'>Вычислим в другой раз...\</FONT>\</H3>");
	}
}