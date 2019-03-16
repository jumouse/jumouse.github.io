function test() {
im=prompt("Введите Ваше ФИО:","");
if (im != null) {
im1=im.toUpperCase();
fam=im1.substring(0,im1.indexOf(" "));
imya=im1.substring(im1.indexOf(" "),fam.length+2);
dop=im1.substring(0,im1.lastIndexOf(" "));
otch=im1.substring(im1.lastIndexOf(" "),dop.length+2);
var str='университета';
var URL='http://www.lengu.ru';
  if (im=='') {
    document.write("\<H3>Здравствуйте, \<FONT COLOR='Green'> неизвестный гость\</FONT>!\</H3>");
  }
  else {
    document.write("\<H3>Добрый день, \<FONT COLOR='Green'>"+fam+" "+imya+". "+otch+"."+"\</FONT>! Чтобы узнать нас поближе, посетите сайт нашего "+str.link(URL)+"\</H3>");
  }
}
else {
  document.write("\<H3>\<FONT COLOR='Red'> Ладно, обойдёмся без знакомства...\</FONT>\</H3>");
}
}