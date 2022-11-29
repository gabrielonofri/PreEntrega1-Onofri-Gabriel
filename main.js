let notas;
let promedio;
let suma= 0;

let nombreAlumno = prompt ("Ingrese Nombre del Alumno a promediar: ");
let apellidoAlumno = prompt ("Ingrese Apellido del Alumno a promediar: ");


function Alumno (nombreAlumno, apellidoAlumno) {

    alert ("Tenga a mano las notas del Alumno: " + nombreAlumno + " " + apellidoAlumno);

}

Alumno (nombreAlumno, apellidoAlumno);
    

let cantidadNotas = parseInt (prompt("Ingrese la Cantidad de notas a promediar:"));

for (i=0; i < cantidadNotas; i++){

    let notas = parseInt (prompt("Ingrese la nota:" + i));
    suma = suma + notas;
    
}
promedio = suma / cantidadNotas;
let estado;

if (promedio >= 6) {

    estado = "APROBADO";
    console.log ("aprobado");

}else {

    estado = "NO APROBADO";
}

mostrar( nombreAlumno, apellidoAlumno, promedio, estado);

function mostrar (nombreAlumno, apellidoAlumno, promedio, estado) {

alert ("El Alumno: " + nombreAlumno + " " + apellidoAlumno + " " + "tiene un promedio de: " + " " + promedio + " " + estado);
console.log ("El Alumno: " + nombreAlumno + " " + apellidoAlumno + " " + "tiene un promedio de: " + " " + promedio + " " + estado);

}




