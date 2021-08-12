function mostrar() {
  
 
let nombre;
let carrera;
let sexo;
let cantidadMaterias;
let notaPromedio;
let edad;
// A
let flagMejorPromFisica = 1;
let acumuladorPromFisica = 0;
let nombreMejorPromFisica;
//B
let nombreAlumnaJoven;
let flagAlumnaJoven = 1;
let edadAlumnajoven;
// C
let porFisica;
let porcQuimica;
let porcSistemas;
let contadorQuimica = 0;
let contadorFisica = 0;
let contadorSistemas = 0;
let totalEstudiantes;
// D
let flagEstMasMaterias = 1;
let edadEstMasMaterias;
let nombreEstMasMaterias;
let acumuladorMaterias = 0;


for (let i=0; i < 2; i++){

  nombre = prompt("Ingrese nombre:");
  carrera = prompt("Favor ingrese carrera (quimica/fisica/sistemas");
    while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
      carrera = prompt("Datos invalidos, favor ingrese carrera (quimica/fisica/sistemas");
    } 
  sexo = prompt("Ingrese sexo (masculino, femenino o no binario");
    while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
      sexo = prompt("Error, favor ingrese sexo (masculino, femenino o no binario");
    }
  cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias"));
    while(cantidadMaterias <1 && cantidadMaterias >5){
      cantidadMaterias = parseInt(prompt("Error, favor ingrese cantidad de materias (entre 1 y 5)"));
    }
  notaPromedio = parseInt(prompt("Favor ingrese nota promedio del alumno"));
    while (notaPromedio <0 && notaPromedio <10){
      notaPromedio = parseInt(prompt("datos invalidos, favor ingrese nota promedio del alumno"));
    }
  edad = parseInt(prompt("Favor ingresar edad"));
    while (isNaN(edad) && edad >0){
      edad = parseInt(prompt("Datos invalidos, favor ingresar edad"));
    }

  if (carrera == "fisica"){
    if(flagMejorPromFisica){
      acumuladorPromFisica = notaPromedio;
      nombreMejorPromFisica = nombre;
      flagMejorPromFisica = 0;
    }
  contadorFisica++;
  } else if (carrera == "quimica"){
    contadorQuimica++;
  }else{
    contadorSistemas++;
  }

  if (flagAlumnaJoven || edad < edadAlumnajoven && sexo == "femenino"){
        edadAlumnajoven = edad;
        nombreAlumnaJoven = nombre
				flagAlumnaJoven = 0;
  }
  
  if (flagEstMasMaterias || carrera == "fisica" || carrera == "sistemas" && cantidadMaterias > acumuladorMaterias){
      edadEstMasMaterias = edad;
      nombreEstMasMaterias = nombre;
      acumuladorMaterias = cantidadMaterias;
      flagEstMasMaterias = 0;
  }

}

totalEstudiantes = contadorFisica + contadorQuimica + contadorSistemas;
porFisica = contadorFisica*100 / totalEstudiantes;
porcQuimica = contadorQuimica*100 / totalEstudiantes;
porcSistemas = contadorSistemas*100/totalEstudiantes;

document.write("A-El nombre del estudiante de fisica con mejor promedio es " + nombreMejorPromFisica + "<br>");
document.write("B- el nombre de la alumna mas joven es " + edadAlumnajoven + "<br>");
document.write("C- El porcentaje de estudiantes de quimica es " + porcQuimica + "%, el porcentaje de estudiantes de fisica es " + porcQuimica + "% y el porcetaje de estudiantes de Sistemas es de " + porcSistemas + "%." + "<br>" );
document.write("D- La edad del estudiante que cursa más materia es " + edadEstMasMaterias + " y su nombre es " + nombreEstMasMaterias + "<br>");





}
