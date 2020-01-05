<?php
            
            $url=   $_POST['My_url'];
            $anio=   $_POST['anio'];
            $name=   $_POST['name'];
            $force=   $_POST['force'];
     
            include($url);
            echo $url;
           
        /*
        if(isset($_POST['name'])){
            $name=$_POST['name'];
            $tareas=$_POST['description'];
            $query="INSERT INTO task(name,tarea) values ('$name','$tareas')";
            $result=mysqli_query($connection,$query);
            if(!$result){
                die('QUERY FALLO');
            }
            echo 'tarea agregada';
        }*/
?>