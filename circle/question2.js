<!DOCTYPE html>
<html>
<head>
<script>
const loads;

//set cookie to param
function setCookie(v) {
  document.cookie = "cookieCounter = " + v;
  console.log(document.cookie);
}


//run this on the page load
  function start(){
  	//get value of cookie
	loads = getCookieValue("cookieCounter");
	//double checking the load value
	console.log("number of loads on cookie = " +loads);
    var newload = loads++;
    setCookie(newload);
}


</script>
</head>

<body onload="start()"></body>
<button onclick="setCookie(5)">Click here to reset cookie</button>
</html>


/// onpage load 
get cookie value
set to loads

add 1 to loads
set loads to new cookie