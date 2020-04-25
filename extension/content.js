var titles = document.getElementsByTagName("h3");
for (var i = 0; i < titles.length; i++) {
	var div = titles[i].parentNode.parentNode;
	if (div.className == "r") {
		var req = new XMLHttpRequest();
		var url = "https://www.covid-19facts.com/?p=83176";
		req.overrideMimeType(url);
		req.open('GET', "https://34.89.30.97/phpFakeOutServer/check_if_blackList.php"+"?url="+url, false);
		req.onload  = function() {
   			var jsonResponse = JSON.parse(req.responseText);
   			var percentage = jsonResponse.success;
			var rating = "<br> Trustworhiness: " + percentage.toString(10) + "%";
			if (percentage > 50) {
			rating = rating.fontcolor("green");
			} else {
			rating = rating.fontcolor("red");

			}
			titles[i].innerHTML += rating;
 		  
			};

		req.send(null);}
	}