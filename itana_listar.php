<?php
             
             $lista=$_POST['list'];
             $url=   $_POST['My_url'];
             include($url);
             $campo='';
             if($lista=='Año'){
                $query="SELECT Distinct(ANIO) FROM projecto_itana";
                $campo='ANIO';
             }else{
                $query="SELECT Distinct(Area_name) FROM projecto_itana";
                $campo='Area_name';
             }


             $result=mysqli_query($connection,$query);


             if(!$result){
                die('Error en busqueda'.mysqli_error($connection));
               
            }
            $json=array();


            
            if($campo=='ANIO'){
                while($row=mysqli_fetch_array($result)){
                    $json[]=array(
                         
                        'ANIO'=>$row['ANIO'],
                        

                    );
               };
            }
            else{
                while($row=mysqli_fetch_array($result)){
                    $json[]=array(
                         
                        
                        'Area_name'=>$row['Area_name'],
                        

                    );
                  };

            }
           
        $jsonString=json_encode($json);
            echo $jsonString;
           // echo $cadena.'</select>';
             
           
               
               
                
 
?>