<?php
             
             $anio=$_POST['anhno'];
             $region=$_POST['region'];
             $url=   $_POST['My_url'];
           
            include($url);
             
            if(isset($_POST['My_url'])){
                $query="DELETE FROM `projecto_itana` WHERE `ANIO`=$anio and `Area_name`='$region'";
                $result=mysqli_query($connection,$query);
                if(!$result){
                    die('Error en busqueda '.mysqli_error($connection));
                   
                }
                 
                
             } 
            echo 'Registro borrado';
 
              
                
 
?>