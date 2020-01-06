<?php
             
             $tipo=$_POST['tipos'];
             $url=   $_POST['My_url'];
             $dato=$_POST['dato'];
           
            include($url);
             
             if(!isset($_POST['tipo'])){
                 
                 
                 if($tipo=='names'){

                    $query="SELECT Area_name FROM tabla_codigos";
                    $result=mysqli_query($connection,$query);
                    if(!$result){
                        die('Error en busqueda '.mysqli_error($connection));
                       
                    }
                    $json=array();
                    while($row=mysqli_fetch_array($result))
                    {
                        $json[]=array(
                            'Area_name'=>$row['Area_name']
                        );
                    
                    }
                    $jsonstring=json_encode($json);
                    echo $jsonstring;
                    
                 }
                 if($tipo=='anios'){

                    $query="SELECT Distinct(ANIO)  FROM projecto_itana where `Area_name`='$dato' order by ANIO desc ";
                    $result=mysqli_query($connection,$query);
                    if(!$result){
                        die('Error en busqueda '.mysqli_error($connection));
                       
                    }
                    $json=array();
                    while($row=mysqli_fetch_array($result))
                    {
                        $json[]=array(
                            'ANIO'=>$row['ANIO']
                        );
                    
                    }
                    $jsonstring=json_encode($json);
                    echo $jsonstring;
                    
                 }
                 

                
             }
               
           

             

              
               
                
 
?>