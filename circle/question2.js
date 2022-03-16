<!DOCTYPE html>
<html>
<head>
<script>

const loads;   //var to save cookie values from the browser





function writeCookie(v) { //function to set the cookie value
  
  document.cookie = "cookieCounter = " + v;
  console.log(document.cookie);
  }




  function readCookieValue(){
   //get the value of a cookie
   let cookievalue = "cookieCounter=";
   let decodedCookie = decodeURIComponent(document.cookie); // decode the cookie
   let ca = decodedCookie.split(';'); // split it into
   
   
   for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookievalue) == 0) {
      return c.substring(cookievalue.length, c.length);
    }
  }
  return "";
  };
  


  //run this on page start
  function start(){    
  	
	loads = readCookieValue("cookieCounter"); //save the value of the current cookie
	console.log("number of loads on cookie = " +loads); //double checking the load value
    var newload = loads++; // add 1 to loads
    writeCookie(newload); // set new cookie value
  }




</script>
</head>

<body onload="start()"></body>
<button onclick="writeCookie(0)">Click here to reset cookie</button>
</html>


/// onpage load 
get cookie value
set to loads

add 1 to loads
set loads to new cookie