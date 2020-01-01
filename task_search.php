<?php
        include('database.php');
        $search=$_POST['search'];
        if(!empty($search)){
                            $query="SELECT * FROM task WHERE NAME LIKE '$search%' ";
                            $result=mysqli_query($connection,$query);
                            if(!$result){
                                die('QUERY ERROR'.mysqli_error($connection));
                            }
                            while($row=mysqli_fetch_array($result)){
                                        $json[]=array(
                                            'name'=>$row['name'],
                                            'tarea'=>$row['tarea'],
                                            'id'=>$row['id']
                                        );
                            };
                            $jsonString=json_encode($json);
                            echo $jsonString;
                           
                            

                
        }
?>