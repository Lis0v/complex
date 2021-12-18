    //----------matma---------------------------
	 
    function penis1() {
      var Z = document.getElementById("Z").value;
      var K = document.getElementById("K").value;
      var huj11 = Math.round((Z * Math.cos(K * (Math.PI/180))) * 100) / 100;
      document.getElementById("wynik11").innerHTML = huj11;
	  
	        var huj12 = Math.round((Z * Math.sin(K * (Math.PI/180))) * 100) / 100;
      document.getElementById("wynik12").innerHTML = huj12;
    }
	
	
	    function penis2() {
      var a = document.getElementById("a").value;
      var b = document.getElementById("b").value;
  
      var huj21 = Math.round((Math.sqrt(a ** 2 + b ** 2)) * 100) / 100;
      document.getElementById("wynik21").innerHTML = huj21;
		    
      var huj22 = Math.round(Math.atan(b / a) * (180 / Math.PI));
      document.getElementById("wynik22").innerHTML = huj22;
    }
