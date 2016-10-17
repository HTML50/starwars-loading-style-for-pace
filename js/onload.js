Pace.on('done', function() {
 var link = document.createElement("link");
 link.rel = "stylesheet";
 link.type = "text/css";
 link.href = 'css/slideshow.css';
 setTimeout(function(){
 document.getElementsByTagName("head")[0].appendChild(link);
 document.getElementById("hidden").style.display='block';
 document.getElementsByTagName('div')[0].style.display='none';
 document.getElementById("loading").innerHTML = 'Load finished<br>Fork me on <a href="https://github.com/HTML50/starwars-loading-style-for-pace">Github</a>'
 },2000)
});