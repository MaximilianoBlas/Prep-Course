var palabras = ["hola" , "nano" , "amigo" , "mio"]
while (palabras.length > 1) {
    var primera = palabras.shift()
    palabras [palabras.length - palabras.length] = primera + " " + palabras[palabras.length - palabras.length];
  
  } console.log(palabras);
