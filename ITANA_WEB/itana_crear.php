<?php
            
            $url=   $_POST['My_url'];
            $anio=   $_POST['anhno'];
            $name=   $_POST['region'];
            $force=   $_POST['fuerza'];
            $trabajadores=   $_POST['trabajadores'];
            include($url);
            $query="SELECT * FROM `projecto_itana` WHERE `ANIO`=$anio and `Area_name`='$name'";
            
            $result=mysqli_query($connection,$query);
            $count=0;
            if(!$result){
                die('QUERY FALLO');
            }
            while($row=mysqli_fetch_array($result))
            {
                 
               $count=$count+1;
                
            }
         
             
    if($count==0){
     //********************************************************* */
            
            $query="select FIPS from tabla_codigos where `Area_name`='$name'";
            
            $result=mysqli_query($connection,$query);
            if(!$result){
                die('QUERY FALLO');
            }
          //////////////////////////////////////////////////////////////////////////////////// 
            $flop=0;
            while($row=mysqli_fetch_array($result))
            {
                 
                $flop= $row['FIPS'];
                
            }
            $desempl=$force-$trabajadores;
            $ratio=$desempl/$force;
            $query="INSERT INTO `projecto_itana`
            (`FIPS`, `ANIO`, `Area_name`, `Civilian_labor_force`, `Employed`, `Unemployed`, `Unemployment_rate`)
            VALUES 
            ($flop,$anio,'$name',$force,$trabajadores,$desempl,$ratio)";
            $result=mysqli_query($connection,$query);
            if(!$result){
                die('Actualizacion falló');
            }
            echo "Tarea Actualizada";
        
    }
    else{
        echo "El Registro ya existe";
    }

?>