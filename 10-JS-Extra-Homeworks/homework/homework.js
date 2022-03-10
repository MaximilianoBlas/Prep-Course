// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var mat = []
  matriz = function(objeto){
    for (var k in objeto) {
      
       mat.push([k , objeto[k]])
      }
    }
    matriz(objeto)
    return mat
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
//"sktpwrroqstkrpwwsqtqopwktsd"
//"h"
  var objeto = {}
  var valor = 0
  strin = function(string){
for (let i = 0; i < string.length; i++) {
  var str = string.charAt(i)
  valor = 0
    for (let i = 0; i < string.length; i++) {
      if (str === string.charAt(i)){
        valor = valor + 1
        objeto[str] = valor
       }
     
     }
   }
  }
  strin(string)
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var str = ""
  var str2 = ""
  var resultado = ""
  strin = function(s){
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === s.charAt(i).toUpperCase() ) {
        str = str + s.charAt(i)
        
      } else {
        str2 = str2 + s.charAt(i)
      }

      
    }
  }
  strin(s)
  return resultado = str + str2
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var aux = ""
  var resultado = ""
  strin = function(str){
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== " " || str.charAt(i) === "!") {
          aux = str.charAt(i) + aux
      } else {
        resultado = resultado + aux + " "
        aux = ""
      }
      
    }
  }
 
  strin(str)
  resultado = resultado + aux
  return resultado
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //15451
  //"15451"
  var resultado = 0
  var str = ""
   capicua = function(numero){
    str = numero.toString()
    for (let i = 0; i < str.length/2; i++) { 
      if (str.charAt(i) === str.charAt(str.length - ( i + 1))) {
        resultado = 1
      } else {
        resultado = 2
        return "No es capicua"
      }
      
    }
   }
   capicua(numero)
   if (resultado === 1) {
     return "Es capicua"
   } else if (resultado === 2) {
     return "No es capicua"
   }


}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var caden = ""
  cade = function(cadena){
    caden = cadena
    caden = caden.replace("a","")
    caden = caden.replace("b","")
    caden = caden.replace("c","")
    

  }
   cade(cadena)
   return caden
   
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux = 1
  fun = function (matriz){
    for (let i = 0; i < matriz.length; i++) {
     if ( matriz[i].length > aux) {
         aux = matriz[i]
       
     }
      
    }
  }

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

