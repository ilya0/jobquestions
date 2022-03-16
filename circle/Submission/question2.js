/// I've simplified some of the code here, and left some of the more important parts of the functional code to show how it would work in this example

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
   let ca = decodedCookie.split(';'); // split it into parts 
   
   //go through the array, and find the cookie value specific to this example
   for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookievalue) == 0) {
      loads = c.substring(cookievalue.length, c.length); // save the loads to the var
      return c.substring(cookievalue.length, c.length); // return actual cookievalue
    }
  }
  return ""; //returns nothing if nothing matches
  };
  

  function start(){    
    if (loads == 0 || loads > 0){
      loads = loads+1;
    }else{
      writeCookie(0);
    }
  	//test for null or 0
    //set to 0 if null
    //if not set counter to +1 
    //write cookie value


  }




</script>
</head>

<body onload="start()"></body>
<button onclick="writeCookie(0)">Click here to reset cookie</button>
</html>
