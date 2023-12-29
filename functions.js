function menur(arg){
	if (arg)  { $("#main").load("file" + arg + ".html"); }
}

document.addEventListener("DOMContentLoaded", function() {
  	 $("#main").load("file01.html");
  	 
});