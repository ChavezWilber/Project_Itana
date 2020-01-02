$(document).ready(function(){
    const database_url='Itana_Database.php';
    const listar_url='itana_listar.php';
    let mostrar_lista=false;

console.log("Jquery esta funcionando");
mostrar_busqueda();

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

function mostrar_busqueda(valor){
    if(!valor){
        $('#result_busqueda').hide();
    }else{
        $('#result_busqueda').show();
    }

};

});