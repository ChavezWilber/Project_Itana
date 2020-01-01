<?php
        include('database.php');
        if(isset($_POST['name'])){
            $name=$_POST['name'];
            $tareas=$_POST['description'];
            $query="INSERT INTO task(name,tarea) values ('$name','$tareas')";
            $result=mysqli_query($connection,$query);
            if(!$result){
                die('QUERY FALLO');
            }
            echo 'tarea agregada';
        }
?>