$( document ).ready(function() {
    
	var modalBool = document.getElementById("cartJS").getAttribute("data-modal");
	if(modalBool == "true") {
	$("#checkout").click(function(){
	$('#myModal').modal('show');
	    });
	}
		
	var activation;	
	if(document.getElementById("cartJS").getAttribute("data-activation")) {
		var activation = document.getElementById("cartJS").getAttribute("data-activation");
	}
	
	var deleteAction = document.getElementById("cartJS").getAttribute("data-deleteaction");
	
	$.getJSON("resources/data.json", function(json) {
	if (sessionStorage.length > 0) {
	
	var placeholderDiv = document.getElementById("placeholder");
	
	var vizAttr1 = document.getElementById("cartJS").getAttribute("data-viz1");
	var vizAttr2 = document.getElementById("cartJS").getAttribute("data-viz2");
	var vizAttr3 = document.getElementById("cartJS").getAttribute("data-viz3");
	var vizAttr4 = document.getElementById("cartJS").getAttribute("data-viz4");
	var deleteItem = document.getElementById("cartJS").getAttribute("data-delete");
	
	var listBinding = document.getElementById("cartJS").getAttribute("data-binding");
	
	var counter = 0;
	
	for (var key in sessionStorage) {
			placeholderDiv.innerHTML = placeholderDiv.innerHTML + "<div class = 'row cartRow'>";
				if(vizAttr1 !== null) {
					placeholderDiv.childNodes[counter].innerHTML = placeholderDiv.childNodes[counter].innerHTML + "<div class='col-md-3'><div class='thumbnail'><img src='" + json[listBinding][key].img + "'></div></div>";
				}
				if(vizAttr2 !== null) {
					placeholderDiv.childNodes[counter].innerHTML = placeholderDiv.childNodes[counter].innerHTML + "<div class='col-md-3'><a href='item.html?id=" + json[listBinding][key].id + "'><p>" + json[listBinding][key].title + "</p></a></div>";
				}
				if(vizAttr3 !==null) {
				   placeholderDiv.childNodes[counter].innerHTML = placeholderDiv.childNodes[counter].innerHTML + "<div class='col-md-2'><p><b>&pound" + json[listBinding][key].price + "</b></p></div>";
				}
				if(vizAttr4 !=null) {
					placeholderDiv.childNodes[counter].innerHTML = placeholderDiv.childNodes[counter].innerHTML + "<div class='col-md-2'><p>" + sessionStorage.getItem(key) + "</p></div>";
				}
				if(deleteItem !== null) {
					placeholderDiv.childNodes[counter].innerHTML = placeholderDiv.childNodes[counter].innerHTML + 	"<div class='col-md-2'><a href='mycart.html?delete=" + json[listBinding][key].id + "' id='remove'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a></div>";
				}
			placeholderDiv.innerHTML = placeholderDiv.innerHTML + "</div>";
			counter = counter + 1;
			}
		} else {
			document.getElementById("placeholder").innerHTML = "Sorry, your shopping cart is empty. Please add at least one item, before you can proceed to checkout.";
			if(activation == "true") {
				$("#checkout").prop("disabled", true);
			}
		}		
     });	//JSON

	//REMOVE ITEMS:	
	if(deleteAction == "true") {
		sessionStorage.removeItem(getUrlParameter('delete'));  
	}
   
   //FEEDBACK MESSAGES
   if (getUrlParameter('new') == 1) {
		$("#success").show();
   } 
   
   if(getUrlParameter('delete')) {
		$("#deletion").show();
   }
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

