$.getJSON("resources/data.json", function(json) {
		var idParam = getUrlParameter('id');
		var deetsBinding = document.getElementById("productDetailsJS").getAttribute("data-detailsBinding");
        if(document.getElementById("pprice")) {
			document.getElementById("pprice").innerHTML = "£" + json[deetsBinding][idParam].price;
			}
        if(document.getElementById("pname")) {
			document.getElementById("pname").innerHTML = json[deetsBinding][idParam].title;
			}			
        if(document.getElementById("pic")) {
			document.getElementById("pic").src = json[deetsBinding][idParam].img;
			}				
        if(document.getElementById("pdescr")) {
			document.getElementById("pdescr").innerHTML = json[deetsBinding][idParam].description;
			}
		if(document.getElementById("dropdownMenu1")) {
			var selectBinding = document.getElementById("productDetailsJS").getAttribute("data-selectBinding");
			document.getElementById("color1").innerHTML = json[selectBinding][0].name;
			document.getElementById("color2").innerHTML = json[selectBinding][1].name;
			document.getElementById("color3").innerHTML = json[selectBinding][2].name;
			}
});

$(document).ready(function() {
	if(document.getElementById("productDetailsJS").getAttribute("data-addToCartAction") == "true") {
	$("#cartButton").click(function(){
        sessionStorage.setItem(getUrlParameter('id'), document.getElementById('qty').value);
    });
	}	
});

$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

function getUrlParameter(sParam)
{	
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 		