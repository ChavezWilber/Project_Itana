<?php
             
             $lista=$_POST['list'];
             $url=   $_POST['My_url'];
           
            include($url);
               
             if(isset($_POST['list'])){
                $query="SELECT Distinct(FIPS) FROM projecto_itana WHERE Area_name='$lista'";
                $result=mysqli_query($connection,$query);
                 
                
             } 

             

             
            if(!$result){
                die('Error en busqueda '.mysqli_error($connection));
               
            }
            $json=array();
            while($row=mysqli_fetch_array($result))
            {
                $json[]=array(
                    'FIPS'=>$row['FIPS']
                );
            
            }
            $jsonstring=json_encode($json);
            echo $jsonstring;
 
               
                
 
?>