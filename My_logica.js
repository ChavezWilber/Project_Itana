$(document).ready(function(){

     
    const database_url='Itana_Database.php';
    const listar_url='itana_listar.php';
    const insertar_url='itana_crear.php';
    let   Lista='Año';
      
    console.log("Jquery funcionando");
     
    
    $( '#check_Reg_Anio' ).on( 'click', function() {
     
        if( $(this).is(':checked') ){
            Lista='Año';
            
        } else {
            Lista='Región';
             
        }
        
        Tipo_busqueda(Lista); 
    });
    function Tipo_busqueda(Lista){

        if(Lista=='Año'){
             
            Busqueda(Lista);

        }
        else{
            
            Busqueda(Lista);
              

        }
         
     

    };
     
    function Busqueda(Lista){

        const dataset={
            list:Lista,
            My_url:database_url
        };
         
        $.post(listar_url,dataset,function(response){
                    console.log(response);
                     
                    const ate=JSON.parse(response);
                   
                   let template='';//` <select class="validate"  id="${Lista}">`;
                     
               if(Lista=='Año'){
                    if(typeof ate == 'object'){

                        ate.forEach(ate => {
                            template+= `<option value="${ate.ANIO}">${ate.ANIO}</option>`;
                            //$("#moises").append(template);

                        });
                       
                       // template+=' </select>';

                       $('#moises').html(template);
                     
                         
                       
                    }

                }else{
                    if(typeof ate == 'object'){

                       ate.forEach(ate => {
                            template+= `<option value="${ate.Area_name}">${ate.Area_name}</option>`;
                            //$("#moises").append(template);
                        });
                       // template+=' </select>';
                       $('#moises').html(template);
                        
                    }

                }
                console.log(template);
                        
              
                   
          
         });
    };
    
  
   
});