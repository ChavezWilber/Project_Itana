$(document).ready(function(){
    console.log('jQuery is Working');
    
    $('#search').keyup(function(e){
        if($('#search').val()){

                        let search = $('#search').val();
                        console.log(search);
                        $.ajax({
                            url:'task_search.php',
                            type:'POST',
                            data:{search},
                            success: function(response){
                                try{
                                    $('#task_result').hide();
                                        const ate=JSON.parse(response);
                                        let template='';
                                        if(typeof ate == 'object'){ 
                                            jq_obj = eval (ate); 
                                            jq_array = [];
                                            
                                            
                                            for(elem in jq_obj){
                                                i=jq_array.length;
                                                console.log(i);
                                                jq_array.push(jq_obj[elem]);
                                                template+='<li>'+jq_array[i].name.toString()+'</li>';
                                                console.log(jq_array[i].name.toString());

                                            }
                                            console.log('ate :',jq_array.length);
                                                if(jq_array.length>0){
                                                    $('#task_result').show();
                                                }
                                                else{
                                                    $('#task_result').hide();
                                                }
                                            $('#container').html(template);
                                            
                                            
                                        }
                            
                                }
                                catch(err) {
                                    $('#task_result').hide();
                                  }
                                
                                
                            }
                        })
        }
        else{
            $('#task_result').hide();
        }
    })

    $('#task-form').submit(function(e){
        const postdate={
            name:$('#name').val(),
            description:$('#description').val()
        
        };
        $.post('task_add.php',postdate,function(response){
            console.log(response);  
        });
        //console.log(postdate);
        e.preventDefault();
    })    
    
    

});