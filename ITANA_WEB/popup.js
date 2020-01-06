
//CREATE
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
	  
	 $('#Mesita').hide();
	 //console.log('insert open');
	
	 $('#Insert_label').val('');
	 $('#Insert_Anio').val('');
	 $('#Insert_force_lab').val('');
	 $('#Insertemploy').val('');
	 $('#bton_ingresar').prop('disabled',true);
	 $('#overlay').show();
	 $('#edit_overlay').hide();
	 $('#delete_overlay').hide();
 

});

btnCerrarPopup.addEventListener('click', function(e){
	 
	overlay.classList.remove('active');
	popup.classList.remove('active');
	 
	$('#Mesita').show();
	 
	location.reload();
 
});
//EDIT
var edit_btn_abrir_popup = document.getElementById('edit_btn-abrir-popup'),
	edit_overlay= document.getElementById('edit_overlay'),
	edit_popup = document.getElementById('edit_popup'),
	edit_btnCerrarPopup = document.getElementById('edit_btn-cerrar-popup');
 
edit_btn_abrir_popup.addEventListener('click', function(){
		edit_overlay.classList.add('active');
		edit_popup.classList.add('active');
 
		$('#Mesita').hide();
		$('#overlay').hide();
		$('#edit_overlay').show();
		$('#delete_overlay').hide();
		$('#Cartas').hide();
		 
});

edit_btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	edit_overlay.classList.remove('active');
	edit_popup.classList.remove('active');
	$('#Mesita').show();
	//console.log('Editado');
	location.reload();
	 
});
//DELETE
var del_btn_abrir_popup = document.getElementById('delete_btn-abrir-popup'),
del_overlay= document.getElementById('delete_overlay'),
del_popup = document.getElementById('delete_popup'),
del_btnCerrarPopup = document.getElementById('delete_btn-cerrar-popup');
 
del_btn_abrir_popup.addEventListener('click', function(){
	del_overlay.classList.add('active');
	del_popup.classList.add('active');
	$('#Mesita').hide();
	$('#overlay').hide();
	$('#edit_overlay').hide();
	$('#delete_overlay').show();
 
});

del_btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	del_overlay.classList.remove('active');
	del_popup.classList.remove('active');
	$('#Mesita').show();
	location.reload();
	 
});