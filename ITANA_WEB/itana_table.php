<?php
             
             $lista=$_POST['list'];
             $url=   $_POST['My_url'];
             $campo=$_POST['campo'];
            include($url);
               
          
             

    if($campo=='Region'){

        if(isset($_POST['list'])){
            $query="SELECT ANIO,Civilian_labor_force,Employed FROM projecto_itana WHERE Area_name='$lista' ORDER BY ANIO ASC";
            $result=mysqli_query($connection,$query);
             
            
         } 
        

            if(!$result){
                die('Error en busqueda '.mysqli_error($connection));
               
            }
            $json=array();
            while($row=mysqli_fetch_array($result))
            {
                $json[]=array(
                    'ANIO'=>$row['ANIO'],
                    'Civilian_labor_force'=>$row['Civilian_labor_force'],
                    'Employed'=>$row['Employed'],
                    'UnEmployed'=>($row['Civilian_labor_force']-$row['Employed']),
                    'Rate'=>($row['Civilian_labor_force']-$row['Employed'])/$row['Civilian_labor_force']
                );
            
            }
            $jsonstring=json_encode($json);
            echo $jsonstring;
    }
    else{
        if(isset($_POST['list'])){
            $query="SELECT Area_name,Civilian_labor_force,Employed FROM projecto_itana WHERE ANIO='$lista' ORDER BY Area_name ASC";
            $result=mysqli_query($connection,$query);
             
            
         } 
        

            if(!$result){
                die('Error en busqueda '.mysqli_error($connection));
               
            }
            $json=array();
            while($row=mysqli_fetch_array($result))
            {
                $json[]=array(
                    'Area_name'=>$row['Area_name'],
                    'Civilian_labor_force'=>$row['Civilian_labor_force'],
                    'Employed'=>$row['Employed'],
                    'UnEmployed'=>($row['Civilian_labor_force']-$row['Employed']),
                    'Rate'=>($row['Civilian_labor_force']-$row['Employed'])/$row['Civilian_labor_force']
                );
            
            }
            $jsonstring=json_encode($json);
            echo $jsonstring;

    }
        
                
 
?>