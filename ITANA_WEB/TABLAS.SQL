CREATE DATABASE ITANA;


delete from projecto_itana;
CREATE TABLE projecto_itana(
    FIPS int,
    ANIO int,
    Area_name varchar(500),
    Civilian_labor_force int,
    Employed int,
    Unemployed int,
    Unemployed_rate decimal(10,0),
)

delete from Tabla_codigos;
CREATE TABLE Tabla_codigos(
    FIPS int NOT NULL PRIMARY KEY,
    Area_name varchar(500)
  
)
 

INSERT INTO `Tabla_codigos` (FIPS,Area_name) values (12,'aaaaa')
INSERT INTO `projecto_itana`
(`FIPS`, `ANIO`, `Area_name`, `Civilian_labor_force`, `Employed`, `Unemployed`, `Unemployment_rate`)
VALUES 
(select FIPS from tabla_codigos where `Area_name`='Bullock County, AL','Bullock County, AL',2332,12112,121,15,0.2)