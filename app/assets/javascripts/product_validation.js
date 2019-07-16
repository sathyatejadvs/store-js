 // $( "product_name" ).submit(function( event ) {

 // 	if (val == "") {  
 // 		alert("Name can't be blank");  
 // 		return false; 
 // 	}
 // 	else event.preventDefault();
 // });


function validation(){ 

	var val = document.getElementById("product_name").value;  
	if (val == "" || val == null) {  
		alert("Name can't be blank");  
		return false;  
	}
	else {
		return true;
	}
}

