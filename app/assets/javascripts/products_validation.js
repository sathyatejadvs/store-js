 $( "form" ).submit(function( event ) {

 	if( validation() )
 		return true;
 }
 else event.preventDefault();
});