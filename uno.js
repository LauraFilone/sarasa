function mostrar() {
  /*
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota 
mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad
  */
 let nombre;
 let tipo;
 let sangre;
 let edad;
 let sexo;
 let respuesta;
 // A 
 let promEdadReptiles;
 let acumEdadReptiles = 0;
 let contadorReptiles = 0;

 // B
 let flagMascotaJoven = 1;
 let edadMascotaJoven;
 let sexoMascotaJoven;
 let tipoMascotaJoven;

 //C
 let totalMascotas
 let contadorAves = 0;
 let contadorMamiferos = 0;
 let porcentajeAves;

 //D
 let mayorTipo;

do{
  nombre = prompt("Ingrese nombre:");
    while(nombre.lenght < 3 || nombre.lenght < 8){
      nombre = prompt("Dato inválido, ingrese nombre:");
  }
  tipo = prompt("Favor ingrese tipo (mamifero/ave/reptil)");
    while(tipo != "mamifero" && tipo != "ave" && tipo != "reptil"){
      tipo = prompt("Datos invalidos, favor ingrese tipo (mamifero/ave/reptil)");
    }
  
  if (tipo == "reptil"){
			sangre = prompt ("Ingrese tipo de sangre (fria): ");
			while (sangre != "fria"){
				sangre = prompt("Error, reingrese tipo de sangre (fria)");
			} 
		}else {		
			sangre = prompt("Favor ingrese tipo de sangre (fria/calida)");
      while(sangre != "fria" && sangre != "calida"){
        sangre = prompt("Error, favor ingrese tipo de sangre (fria/calida)");
      }
			} 
		    
  edad = parseInt(prompt("Favor ingrese edad"));
        while(edad <=0){
          edad = parseInt(prompt("Datos invalidos, favor ingrese edad"));
        }
  sexo = prompt("Favor ingrese sexo (m/h)");
        while(sexo != "m" && sexo != "h"){
          sexo = prompt("Datos invalidos, Favor ingrese sexo (m/h)");
        }

  if (tipo == "reptil"){
    acumEdadReptiles += edad;
    contadorReptiles++;
  } else if (tipo == "ave"){
    contadorAves++;
  } else{
    contadorMamiferos++;
  }

  if (flagMascotaJoven == 1 || edadMascotaJoven < edad){
    sexoMascotaJoven = sexo;
		tipoMascotaJoven = tipo;
		flagMascotaJoven = 0;
  }
    


respuesta = prompt("Desea ingresar una mascota mas?");
}while (respuesta == "s");

//////////////////////////////

if(contadorReptiles !=0){
	promEdadReptiles = acumEdadReptiles / contadorReptiles;
}else{
  promEdadReptiles = 0;
}
totalMascotas = contadorReptiles + contadorMamiferos + contadorAves;
porcentajeAves = contadorAves * 100 / totalMascotas;

if (contadorReptiles > contadorMamiferos && contadorReptiles > contadorAves){
  mayorTipo = "Reptil";
} else if(contadorAves >= contadorMamiferos && contadorAves >= contadorReptiles ){
  mayorTipo = "Ave";
}else{
  mayorTipo = "Mamiferos";
}



document.write("A- El promedio de edad de los reptiles es: " + promEdadReptiles + "<br>");

document.write("B- El tipo de la mascota más joven es " + tipoMascotaJoven + " y el sexo es " +sexoMascotaJoven + "<br>");
document.write("C- El porcentaje de aves sobre el total de mascotas ingresadas es " + porcentajeAves + "%" + "<br>");
document.write("D- Hay mayor cantidad de mascotas del tipo " + mayorTipo + "<br>");


}
