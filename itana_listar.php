<?php
             
             $search=$_POST['search'];
             $url=   $_POST['My_url'];
             include($url);
             if(!empty($search)){
                
                $query="SELECT * FROM projecto_itana WHERE Area_name LIKE '$search%' ";
                
                $result=mysqli_query($connection,$query);
                 
                if(!$result){
                    die('QUERY ERROR'.mysqli_error($connection));
                   
                }
                $json=array();
                while($row=mysqli_fetch_array($result)){
                            $json[]=array(
                                'FIPS'=>$row['FIPS'],
                                'ANIO'=>$row['ANIO'],
                                'Area_name'=>$row['Area_name'],
                                'Civilian_labor_force'=>$row['Civilian_labor_force'],
                                'Employed'=>$row['Employed'],
                                'Unemployed'=>$row['Unemployed'],
                                'Unemployment_rate'=>$row['Unemployment_rate']

                            );
                };
                $jsonString=json_encode($json);
                echo $jsonString;
            }
               
               
                
 
?>