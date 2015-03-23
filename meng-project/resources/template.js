 function read_json() {
		if(document.getElementById("numItems")) {
			if(sessionStorage.length > 0) {
			document.getElementById("numItems").innerHTML = " (" + sessionStorage.length + ")";
			}
		}
			
            $.getJSON("resources/data.json", function(json) {
				if(document.getElementById("navbar")) {
					var binding = document.getElementById("templateJS").getAttribute("data-navBinding");
					var vizAttribute = document.getElementById("templateJS").getAttribute("data-vizAttribute");
					for (var i = 0; i < 7; i++)  {
						document.getElementById("cat" + i).innerHTML = json[binding][i][vizAttribute];
					}
				}
            });
        }