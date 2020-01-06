$(document).ready(function(){

     
    const database_url='Itana_Database.php';
    const listar_url='itana_listar.php';
    const Despliegue_url='itana_lista_despl.php';
    const codigos_url='itana_listar_codigos.php';
    const insertar_url='itana_crear.php';
    const tabla_url='itana_table.php';
    const delete_url='itana_delete.php';
    const edit_unico='itana_edit_unico.php';
    let   Lista='Region';
    Busqueda(Lista);
    //console.log("Jquery funcionando");
    $('#My_tabla').hide();
    $('#Resumen').hide();
  //  Inicio_pag
  $( '#Inicio_pag' ).on( 'click', function() {
    location.reload();
});
  
    
    $( '#check_Reg_Anio' ).on( 'click', function() {
        $('#My_tabla').hide();
        $('#Resumen').hide();
        if( $(this).is(':checked') ){
            Lista='Anhno';
            
            $('#table_cambio').html('Region');
            $('#Table_search').html('');
            
            
        } else {
            Lista='Region';
             
            $('#table_cambio').html('Anhno');
            $('#Table_search').html('');
        }
        
        Tipo_busqueda(Lista); 
      
         
    });
    function Tipo_busqueda(Lista){

        if(Lista=='Anhno'){
             
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
                     
                     
                    const ate=JSON.parse(response);
                  let template='';
                                     //console.log('ate');
                    let i=0;

               if(Lista=='Anhno'){
                    if(typeof ate == 'object'){
                        template=`<option value="" disabled selected>Elige una opcion</option>`;  
                        ate.forEach(ate => {
                            i=i+1;
                            template+= `<option  id="${i}">${ate.ANIO}</option>`;
                           
                            
                        });
                       
                        
                          $('#seleccion').html(template);
                          $('select').formSelect();
                         
                         
                       
                    }

                }else{
                    if(typeof ate == 'object'){
                        
                         template=`<option value="" disabled selected>Elige una opcion</option>`;  
                       ate.forEach(ate => {
                        i=i+1;
                            template+= `<option   id="${i}">${ate.Area_name}</option>`;
                         
                        });
                       
                        
                       $('#seleccion').html(template);
                       $('select').formSelect();
                        
                        
                    }

                }
                
                         
              
                   
          
         });
    };


//Listar los codigos de los estados con la ayuda del select
    $('#seleccion').change(function() {
        $('#My_tabla').show();
        
        if(Lista=='Region'){
            $('#Resumen').show();
            var select=$('#seleccion option:selected').text();
            
            $('#Region_desc').html(select);
    
            const dataset={
                list:select,
                My_url:database_url
            };
             
            $.post(codigos_url,dataset,function(response){
                    
                    const ate=JSON.parse(response);
                    ate.forEach(ate => {
                        let valor=`${ate.FIPS}`;
                         
                        $('#codigo_dec').html(valor);
                        
                        
                        //console.log(valor);
                             
                         
                        });
                     
                    
    
            });
            Llenar_tabla(Lista,select);


        }

        Llenar_tabla(Lista,select);
        
    
        
      
    });
    function Llenar_tabla(Lista,Valor) {
         if(Lista=='Region'){
                    var select=$('#seleccion option:selected').text();
                     
                     
                     
                    const dataset={
                        campo:Lista,
                        list:select,
                        My_url:database_url
                    };

                    $.post(tabla_url,dataset,function(response){
                        let template='';
                        
                        
                        const tasks=JSON.parse(response);
                        let i=0;
                      tasks.forEach(tasks => {
                          i+=1;
                          Ratio=tasks.Rate*100;
                            template+=`<tr id="">
                                                <td>${i}</td>
                                                <td>${tasks.ANIO}</td>
                                                <td>${tasks.Civilian_labor_force}</td>
                                                <td>${tasks.Employed}</td>
                                                <td>${tasks.UnEmployed}</td>
                                                <td>${String(Ratio.toFixed(2))+'%'}</td>
                                       </tr>`
                                        
                        });
                        $('#Table_search').html(template);
                        $('#My_tabla').show();
                         
                        
                        
                             
                    });
            }  
            else{
                 
                var select=$('#seleccion option:selected').text();
                     
                     
                     
                const dataset={
                    campo:Lista,
                    list:select,
                    My_url:database_url
                };

                $.post(tabla_url,dataset,function(response){
                    let template='';
                    
                  
                    const tasks=JSON.parse(response);
                    let i=0;
                  tasks.forEach(tasks => {
                      i+=1;
                      Ratio=tasks.Rate*100;
                        template+=`<tr id="">
                                            <td>${i}</td>
                                            <td>${tasks.Area_name}</td>
                                            <td>${tasks.Civilian_labor_force}</td>
                                            <td>${tasks.Employed}</td>
                                            <td>${tasks.UnEmployed}</td>
                                            <td>${String(Ratio.toFixed(2))+'%'}</td>
                                   </tr>`
                                    
                    });
                    $('#Table_search').html(template);
                    
                         
                });

            }

            
            









    };

    
    $(document).on('click','#El_contenedor',function(){
        //insertar_datos();
    });

    $('#Insert_Anio').keyup(function(e){
        let search = $('#Insert_Anio').val();
                    let msg=    ` <div class="alert alert-danger" role="alert">
                                AÑO INCORRECTO!!
                        </div>`;
                     

        $('#Insert_label').html("Ingrese Año");
        if((search>3000) || (search<1900) ){
            console.log('ingrese un año');
            $('#Insert_label').html(msg);
            $('#Insert_force_lab').prop('disabled',true);
            $('#Insertemploy').prop('disabled',true);
            $('#bton_ingresar').prop('disabled',true);
        }else{
            
            $('#Insert_label').html("");
            $('#Insert_force_lab').prop('disabled',false);
            $('#Insertemploy').prop('disabled',false);
            //$('#bton_ingresar').prop('disabled',false);
        }
    });
    
        //console.log('ateeeee');
    $('#Insertemploy').keyup(function(e){
        let fuerza = parseInt($('#Insert_force_lab').val());
        let trabajadores = parseInt($('#Insertemploy').val());
        let msg=    ` <div class="alert alert-danger" role="alert">
                             Fuerza laboral mayor que la empleabilidad
                        </div>`;
        if((fuerza>0) && (trabajadores>0) ){
                    if((!isNaN(fuerza)) && (!isNaN(trabajadores))){
                      
                            if(fuerza<=trabajadores){
                                
                                $('#bton_ingresar').prop('disabled',true);
                                $('#Insert_label').html(msg);
                            
                            }else{
                                if((!isNaN(fuerza)) && (!isNaN(trabajadores))){
                                     
                                    $('#bton_ingresar').prop('disabled',false);
                                    $('#Insert_label').html("");
                                }
                                
                            }
                    }
        }
        else{
            $('#bton_ingresar').prop('disabled',true);
        }

        
         
         
         
        
    });

    $(document).on('click','#btn-abrir-popup',function(){
  
             
            Lista_busqueda('names',1,'');
    });
    $(document).on('click','#delete_btn-abrir-popup',function(){
  
             
             Lista_busqueda('names',3,'');
    });
    $(document).on('click','#edit_btn-abrir-popup',function(){
  
             
        Lista_busqueda('names',2,'');
    });

    $('#Edit_Region').change(function() {

        var region=$('#Edit_Region option:selected').text();
        //console.log(region);
        Lista_busqueda('anios',2,region);
        $('#bton_editar').prop('disabled',false);
        
      
    });
    $('#Edit_anhno').change(function() {

        $('#edit_force').prop('disabled',false);
        $('#edit_emply').prop('disabled',false);
      //  $('#bton_borrar').prop('disabled',false);
      var region=$('#Edit_Region option:selected').text();
      var anhno=parseInt($('#Edit_anhno option:selected').text());
      
      editar_registro(false,region,anhno,0,0);
        
    });
    function editar_registro(Busqueda_edit,region,anhno,Fuerza,DISPONIBLE){
        if(!Busqueda_edit){

                    const dataset={
                        busc_uniq:'si',
                        region:region,
                        anhno:anhno,
                        Fuerza:Fuerza,
                        DISPONIBLE:DISPONIBLE,
                        My_url:database_url

                };
                $.post(edit_unico,dataset,function(response){
                    //console.log(response);
                    const tasks=JSON.parse(response);
                    let Fuerza_1=0;
                    let disponible_2=0;
                    tasks.forEach(tasks => {
                        Fuerza_1=tasks.Civilian_labor_force;
                        disponible_2=tasks.Employed;     
                    });
                    //console.log(Fuerza_1,disponible_2);
                    $('#edit_force').val(Fuerza_1);
                    $('#edit_emply').val(disponible_2);

                        
                });
        }
        else{
            const dataset={
                busc_uniq:'no',
                Fuerza:Fuerza,
                DISPONIBLE:DISPONIBLE,
                region:region,
                anhno:anhno,
                My_url:database_url,
            }
                $.post(edit_unico,dataset,function(response){
                    //console.log(response);
                    
                    
                        //console.log('lee');
                        let msg=    ` <div class="alert alert-success" role="alert">
                                                Registro actualizado correctamente !!
                                   </div>`;
                        $('#edit_label').html(msg);
                        $('#edit_label').show();
    
    
                        
                        
                });

        };

        }
    


    $('#DELETE_region').change(function() {

        var region=$('#DELETE_region option:selected').text();
        //console.log(region);
        Lista_busqueda('anios',3,region);
        
        
      
    });
    $('#DELETE_anhno').change(function() {

        $('#bton_borrar').prop('disabled',false);
        
      
    });
       
    function Lista_busqueda(tipo,orden,dato){
            if(tipo=='anios'){
                    //console.log('anios');
                    const dataset={
                        tipos:tipo,
                        dato:dato,
                        My_url:database_url,

                    };
                    $.post(Despliegue_url,dataset,function(response){
                        const ate=JSON.parse(response);
                        let template='';
                         
                          let i=0;
                        if(typeof ate == 'object'){
                            
                            template=`<option value="" disabled selected>Elige una opcion</option>`;  
                              ate.forEach(ate => {
                                i=i+1;
                               template+= `<option   id="${i}">${ate.ANIO}</option>`;
                            
                             });
                          
                           
                            }
                            if(orden==2){
                                $('#Edit_anhno').html(template);
                                
                                $('select').formSelect();
                            }
                            if(orden==3){
                                $('#DELETE_anhno').html(template);
                                
                                $('select').formSelect();
                            }
                            
    
                             
                    });

                    
            }
            if(tipo=='names'){
                //console.log('names');
                const dataset={
                    tipos:tipo,
                    dato:dato,
                    My_url:database_url
                };
                
                 
                $.post(Despliegue_url,dataset,function(response){
                    const ate=JSON.parse(response);
                    let template='';
                     
                      let i=0;
                    if(typeof ate == 'object'){
                        
                        template=`<option value="" disabled selected>Elige una opcion</option>`;  
                          ate.forEach(ate => {
                            i=i+1;
                           template+= `<option   id="${i}">${ate.Area_name}</option>`;
                        
                         });
                      
                       
                        }
                        if(orden==1){
                            $('#Insert_Region').html(template);
                            //console.log('agregado');
                            $('select').formSelect();
                        }
                        if(orden==2){
                            $('#Edit_Region').html(template);
                            //console.log('agregado');
                            $('select').formSelect();
                        }
                        if(orden==3){
                            $('#DELETE_region').html(template);
                           // console.log('borrado');
                            $('select').formSelect();
                        }
                        

                         
                });

            }

    }
   
    $(document).on('click','#bton_ingresar',function(e){



        //-----------------------------------------------------------------------
         
         var region=$('#Insert_Region option:selected').text();
         var anhno=parseInt($('#Insert_Anio').val());
         let fuerza = parseInt($('#Insert_force_lab').val());
         let trabajadores = parseInt($('#Insertemploy').val());
         $('#Insert_label').html("");
         if(region!='Elige una opcion'){
            //console.log(region);
            //console.log(anhno);
            //console.log(fuerza);
            //console.log(trabajadores);
             //******************************************************************************* */
             //console.log('names');
             const dataset={
                 region:region,
                 anhno:anhno,
                 fuerza:fuerza,
                 trabajadores:trabajadores,
                 My_url:database_url
             };
             
              
             $.post(insertar_url,dataset,function(response){
                 const ate=response;
                 //console.log(ate);
                if(ate=='Tarea Actualizada'){
                     let msg=    ` <div class="alert alert-success" role="alert">
                                             Registro Insertado correctamente!!!
                                </div>`;
                                $('#Insert_label').html(msg);
                }
                if(ate=='El Registro ya existe'){
                    let msg=    ` <div class="alert alert-danger" role="alert">
                                        El Registro ya existe!! , verifique el año y la region 
                                 </div>`;
                         $('#Insert_label').html(msg);

                }

                 
                
                 
             });
             /***********************************************************************************/

         }
         else{
            $('#Insert_label').html("Elige una Region");
            
         }
         e.preventDefault();
       
    }); 
    $(document).on('click','#bton_borrar',function(e){
         
        var region=$('#DELETE_region option:selected').text();
        var anio  =$('#DELETE_anhno option:selected').text();
        
            //console.log(region);
            //console.log(anio);
             //******************************************************************************* */
             
             const dataset={
                 region:region,
                 anhno:anio,
                 My_url:database_url
             };
             
              
             $.post(delete_url,dataset,function(response){
                 const ate=response;
                 //console.log(response);
                 //console.log(ate);
                 if(ate=='Registro borrado'){
                    //console.log('lee');
                    let msg=    ` <div class="alert alert-success" role="alert">
                                            Registro borrado correctamente !!
                               </div>`;
                    $('#delete_label').html(msg);
                    $('#delete_label').show();


                    }
                 
                 
             });
             /***********************************************************************************/

             e.preventDefault();

   }); 
 
   $(document).on('click','#bton_editar',function(e){



    //-----------------------------------------------------------------------
     
     var region=$('#Edit_Region option:selected').text();
     var anhno=parseInt($('#Edit_anhno').val());
     let fuerza = parseInt($('#edit_force').val());
     let trabajadores = parseInt($('#edit_emply').val());
  
     if(region!='Elige una opcion'){
        //console.log(region);
        //console.log(anhno);
        //console.log(fuerza);
        //console.log(trabajadores);
         //******************************************************************************* */
         //console.log('names');
         const dataset={
             region:region,
             anhno:anhno,
             fuerza:fuerza,
             trabajadores:trabajadores,
             My_url:database_url
         };
         
           
         editar_registro(true,region,anhno,fuerza,trabajadores)
         /***********************************************************************************/

     }
     else{
       
        
     }
     e.preventDefault();
   
}); 
    
    $('#edit_force').keyup(function(e){
        let fuerza = parseInt($('#edit_force').val());
        let trabajadores = parseInt($('#edit_emply').val());
        if((fuerza>0) && (trabajadores>0) ){
                if(fuerza>trabajadores){
                    
                    $('#bton_editar').prop('disabled',false);
                }
                else{
                    $('#bton_editar').prop('disabled',true);
                }
        }
        else{
            $('#bton_editar').prop('disabled',true);
        }

    });
    $('#edit_emply').keyup(function(e){
        let fuerza = parseInt($('#edit_force').val());
        let trabajadores = parseInt($('#edit_emply').val());
        if((fuerza>0) && (trabajadores>0) ){
            if(fuerza>trabajadores){
                $('#bton_editar').prop('disabled',false);

            }
            else{
                $('#bton_editar').prop('disabled',true);
            }
    }
    else{
        $('#bton_editar').prop('disabled',true);
    }
        
    });
   
});