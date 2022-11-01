//Pedimos las notas que se promediara
function obtenerNotas() {
            do {
                nota = prompt("Ingrese una nota entre un número del 0 al 10: \n (Precione 'Cancelar' para finalizar la operación)")

                if(isNaN(nota) || nota == "" || nota > 10 || nota < 0) {
                    alert ("El valor ingresado no es un dato valido.");
                } else if (nota === null) {
                    alert("Ha cancelado la operación");
                    
                    if (confirm("¿Quiere reiniciar el programa?")){
                    obtenerNotas();
                    } else {breakme};
                }

                } while ((isNaN(nota) || nota == "" || nota > 10 || nota < 0));
            
            return Number(nota);
        }


//Sacamos el promedio
function sacarPromedio (valor1, valor2, valor3) {
    let division = 3;
    let promedioFinal = (valor1 + valor2 + valor3) / division;
    promedioFinal = Number(promedioFinal.toFixed(2));

    return promedioFinal;
};


//Vemos si el alumno aprobo
function aprobarAlumno () {
    let calificaciónMinima = 6;

    let nota1 = obtenerNotas();
    let nota2 = obtenerNotas();
    let nota3 = obtenerNotas();

    let promedio = sacarPromedio(nota1, nota2, nota3);

    if (promedio  >= calificaciónMinima){
        alert("El promedio final es " + promedio + ". El alumno aprobó la materia.");
    } else {alert("El promedio final es " + promedio + ". El alumno no aprobó la materia.")};
};

aprobarAlumno();