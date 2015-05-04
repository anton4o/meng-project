$.getJSON("resources/data.json", function(json) {
			if(document.getElementById("campaignName")) {
				var binding = document.getElementById("homeJS").getAttribute("data-campaignBinding");
				document.getElementById("campaignName").innerHTML += json[binding].name;
			}
			
			if(document.getElementById("campaignDescription")) {
				var binding = document.getElementById("homeJS").getAttribute("data-campaignBinding");
				document.getElementById("campaignDescription").innerHTML = json[binding].description;
			}
			
			var listBinding = document.getElementById("homeJS").getAttribute("data-listBinding");
			var listHref = document.getElementById("homeJS").getAttribute("data-listHref");
			
			var numOfLists = document.getElementById("homeJS").getAttribute("data-numOfLists");
			var counter = 0;
			
			for(var l = 0; l < numOfLists; l++) {
				for (var i = 0; i < 6; i++)  {
					if(document.getElementById("title" + l + i)) {
					document.getElementById("title" + l + i).innerHTML = json[listBinding][counter].title;
					}
					if(document.getElementById("price" + l + i)) {
					document.getElementById("price" + l + i).innerHTML = "£" + json[listBinding][counter].price;
					}
					if(document.getElementById("img" + l + i)) {  
					document.getElementById("img" + l + i).src = json[listBinding][counter].img;
					}
					if(document.getElementById("link" + l + i)) {
					document.getElementById("link" + l + i).href = listHref + ".html?id=" + json[listBinding][counter].id;
					}
					counter++;
				}
			}
});