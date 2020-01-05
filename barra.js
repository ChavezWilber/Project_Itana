$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
                left: '0'
                
                
            });
             
            $('#caja_padre').hide();
            $('#cuerpo').hide();
         
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
            });
            
            $('#caja_padre').show();
            $('#cuerpo').show();
             
		}
 
	});
 
};