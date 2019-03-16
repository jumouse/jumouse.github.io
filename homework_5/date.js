function vremya() {
	var today = new Date();
	var number = today.getDay();
	if (number == 1)
		document.write('Понедельник');
	else {
		if (number == 2)
			document.write('вторник');
		else {
			if (number == 3)
				document.write('Среда');
			else {
				if (number == 4)
					document.write('Четверг');
				else {
					if (number == 5)
						document.write('Пятница');
					else {
						if (number == 6)
							document.write('Суббота');
						else
							document.write('Воскресенье');
						}
					}
				}
			}
		}
}