function privet1() {
image = document.getElementById("image");
rez=confirm("Нравится ли Вам эта картинка?");
if (rez==true) {
  image.width=image.width*2;
}
else
  document.write("Тогда не будем Вас нервировать...");
}