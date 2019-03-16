function test() {
im=prompt("Ваше имя, пожалуйста:","");
if (im != null) {
	if (im=='') {
		document.write("\<H3>Здравствуйте, \<FONT COLOR='Green'> неизвестный гость\</FONT>!\</H3>");
	}
	else {
		document.write("\<H3>Здравствуйте, \<FONT COLOR='Green'>"+im+"\</FONT>!\</H3>");
	}
}
else {
	document.write("\<H3>\<FONT COLOR='Red'> Ладно, обойдёмся без знакомства...\</FONT>\</H3>");
}
}