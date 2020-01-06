<?php
             $busc_uniq=$_POST['busc_uniq'];
             $anio=$_POST['anhno'];
             $region=$_POST['region'];
             $Fuerza=$_POST['Fuerza'];
             $DISPONIBLE=$_POST['DISPONIBLE'];
             $url=   $_POST['My_url'];
           
            include($url);
             
            if(isset($_POST['My_url'])){

                if($busc_uniq=='si'){
                        $query="SELECT Civilian_labor_force,Employed FROM projecto_itana WHERE `ANIO`=$anio and `Area_name`='$region'";
                        $result=mysqli_query($connection,$query);
                        if(!$result){
                            die('Error en busqueda '.mysqli_error($connection));
                        
                        }

                        
                        $json=array();
                        while($row=mysqli_fetch_array($result))
                        {
                            $json[]=array(
                                'Civilian_labor_force'=>$row['Civilian_labor_force'],
                                'Employed'=>$row['Employed']
                            );
                        
                        }
                        $jsonstring=json_encode($json);
                        echo $jsonstring;


                    }
                    if($busc_uniq=='no'){
                        $query="UPDATE `projecto_itana` 
                                 SET 
                                    `Civilian_labor_force`=$Fuerza,
                                    `Employed`=$DISPONIBLE,
                                    `Unemployed`=($Fuerza-$DISPONIBLE),
                                    `Unemployment_rate`=($Fuerza-$DISPONIBLE)/$Fuerza WHERE `ANIO`=$anio and `Area_name`='$region' ";
                        $result=mysqli_query($connection,$query);
                        if(!$result){
                            die('Error en busqueda '.mysqli_error($connection));
                        
                        }
                        



                    }
                    
                
             } 
            
 
              
                
 
?>