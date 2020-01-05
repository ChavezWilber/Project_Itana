$(document).ready(function(){
    const database_url='Itana_Database.php';
    const listar_url='itana_listar.php';
    const insertar_url='itana_crear.php';
     
    
         
console.log("Jquery funcionando");
mostrar_busqueda(false);
 
$('#search').keyup(function(e){
    if($('#search').val()){
     
    const datapost={
        search:$('#search').val(),
        My_url:database_url
    };
     
    $.post(listar_url,datapost,function(response){
         
         
        const ate=JSON.parse(response);
        let template='';
        if(typeof ate == 'object'){

            ate.forEach(ate => {
                template+=`<li>${ate.Area_name}</li>`;
            });
            $('#container').html(template);
            if(ate.length>0){
                mostrar_busqueda(true);
            }
            


        }
       // mostrar_lista =response === false ? 'task_add.php' : 'task_update.php';
       
     });
    }
    else{
        mostrar_busqueda(false);
    }
});
 
        $(document).on('click','#Bonton_buscar',function(){
            
            let search = $('#search').val();
            
            $('#search').val('');
             
            console.log( search);
        });
     
        $(document).on('click','#btn-cerrar-popup',function(){
            
         
            $('#caja_padre').show();
            $('#cuerpo').show();
            $('#ID1').show();
            $('#ID2').show();
             
        });
       
        $(document).on('click','#btn-abrir-popup',function(){
           
          
            $('#caja_padre').hide();
            $('#cuerpo').hide();
            $('#ID1').hide();
            $('#ID2').hide();

           
        });
        
        



function mostrar_busqueda(valor){
    if(!valor){
        $('#result_busqueda').hide();
    }else{
        $('#result_busqueda').show();
    }

};

 

$('#Insert').submit(function(e){
    

    const data={
        anio:$('#Anio').val(),
        name:$('#Nombre').val(),
        force:$('#force_lab').val(),
        employ:$('#employ').val(),
        My_url:database_url
    }
    $.post(insertar_url,data,function(response){
        console.log(response);
       
        
         
     });
    
    
}); 


});