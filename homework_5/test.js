function privet() {
rez=confirm("Это сообщение сгенерировал скрипт из внешнего\n файла. Проверим, какую кнопку Вы нажмёте...");
if (rez==true)
	document.write("Вы нажали кнопку ОК");
else
	document.write("Вы нажали кнопку Отмена");
}