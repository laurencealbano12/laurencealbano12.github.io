//resize iframe http://www.programmingtalk.com/showthread.php?t=25995
	function calcHeight()
	{
	  //find the height of the internal page
	  var the_height=
		document.getElementById('myframe').contentWindow.
		  document.body.scrollHeight;
	
	  //change the height of the iframe
	  document.getElementById('myframe').height=
		  the_height;
	}
