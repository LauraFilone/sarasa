function mostrar() {
 

let tipo;
let origen;
let precio;
let respuesta;
// A
let contadorMuñeca = 0;
let contadorRompecabezas = 0;
let contadorPelota = 0;
let jugueteMasVendido;
// B
let promPrecioImportado;
let acumuladorPreciosImp = 0;
let contadorPreciosImp = 0;
// C
let recaudacionTotal;
let acumuladorPrecioMuñeca = 0;
let acumuladorPrecioPelota = 0;
let acumuladorPrecioRompecabezas = 0;
// D
let flagRompecBarato = 1;
let precioRompecBarato;
// E
let ivaTotal;


do{
  tipo = prompt("Favor ingrese tipo de juguete (muñeca, rompecabezas o pelota)").toLowerCase();
    while(tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota"){
      tipo = prompt("Error, favor ingrese tipo de juguete (muñeca, rompecabezas o pelota)").toLowerCase();
    }
  origen = prompt("Favor informar origen (nacional/importado").toLowerCase();
    while(origen != "nacional" && origen != "importado"){
      origen = prompt("Error, favor informar origen (nacional/importado").toLowerCase();
    }
  precio = parseFloat(prompt("Favor ingrese precio"));
    while(precio < 1000 && precio > 5000){
      precio = parseFloat(prompt("Error, favor ingrese precio"));
    }
  if (tipo == "muñeca"){
    acumuladorPrecioMuñeca = acumuladorPrecioMuñeca + precio;
    contadorMuñeca++;
  } else if(tipo == "pelota"){
    acumuladorPrecioPelota = acumuladorPrecioPelota + precio;
    contadorPelota++;
  }else{
    acumuladorPrecioRompecabezas = acumuladorPrecioRompecabezas + precio;
    contadorRompecabezas++
  }
  if(origen == "importado"){
    acumuladorPreciosImp = acumuladorPreciosImp + precio;
    contadorPreciosImp++;
  }
  if(flagRompecBarato || origen == "nacional" && precio < precioRompecBarato){
    precioRompecBarato = precio
    flagRompecBarato = 0;
  }

  respuesta = prompt("Desea ingresar otro juguete?");
}while(respuesta == "s");

if (contadorMuñeca > contadorPelota && contadorMuñeca > contadorRompecabezas){
  jugueteMasVendido = "muñeca";
} else if(contadorPelota >= contadorMuñeca && contadorPelota >= contadorRompecabezas){
  jugueteMasVendido = "pelota";
}else{
  jugueteMasVendido = "Rompecabezas";
}

promPrecioImportado = acumuladorPreciosImp/contadorPreciosImp;
recaudacionTotal = acumuladorPrecioMuñeca + acumuladorPrecioPelota + acumuladorPrecioRompecabezas;
ivaTotal = recaudacionTotal*0.21;

document.write("A- El juegute más vendido fue " + jugueteMasVendido + "<br>");
document.write("B- El promedio de precios de los juguetes importados es " + promPrecioImportado + "<br>");
document.write("C- La recaudación total fue de $" + recaudacionTotal + "<br>");
document.write("D- El precio del rompecabezas nacional mas barato es de $" + precioRompecBarato + "<br>");
document.write("E- El iva total de las ventas fue de $" + ivaTotal);


}
