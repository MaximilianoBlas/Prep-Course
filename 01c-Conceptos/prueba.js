function Persona (nombre, edad, domicilio){
    this.nombre = nombre,
    this.edad = edad, 
    this.domicilio = domicilio;
}
Persona.prototype.saludar = function (){
    console.log("Hola mi nombre es " + this.nombre + " y tengo " + this.edad + " años, vivo en " + this.domicilio)
}
function Alumno (nombre, edad, domicilio, curso){
    Persona.call(this,nombre,edad,domicilio);
    this.curso = curso;
    this.empresa = "soy henry"
}
Alumno.prototype = Object.create(Persona.prototype)
Alumno.prototype.constructor = Alumno

