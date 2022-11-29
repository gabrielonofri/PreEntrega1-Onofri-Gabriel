let notas;
let promedio;
let suma= 0;

let nombreAlumno = prompt ("Ingrese Nombre del Alumno a promediar: ");
if (nombreAlumno === null) {

    alert("Ingrese nuevmente un Nombre");
    nombreAlumno = prompt ("Ingrese Nombre del Alumno a promediar: ");

}else {

    alert("correcto");

}
let apellidoAlumno = prompt ("Ingrese Apellido del Alumno a promediar: ");

if (apellidoAlumno === null) {

    alert("Ingrese nuevmente un Apellido");
    apellidoAlumno = prompt ("Ingrese Apellido del Alumno a promediar: ");

}else {

    alert("correcto");

}



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




