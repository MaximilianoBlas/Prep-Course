var enero = "Enero";
var marzo = "Marzo";
var noviembre = "Noviembre";
var guardado = "";
var respuesta = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] === enero || array[i] === marzo || array[i] === noviembre) {
    respuesta.push(array[i])
  } 
} if (respuesta.length === 3) {
  return respuesta
} else {
  return "No se encontraron los meses pedidos"
} 

}