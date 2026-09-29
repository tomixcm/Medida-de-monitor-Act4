function calcularTamaño() {

let a = document.getElementById("tamañoDeMonitor").value;
let resultado;

if (a < 582) {
        resultado = "Tu pantalla es de tamaño: XS";
} else if (a < 777) {
    resultado = "Tu pantalla es de tamaño: SM";
} else if (a < 965) {
    resultado = "Tu pantalla es de tamaño: MD";
} else if (a < 1098) {
    resultado = "Tu pantalla es de tamaño: LG";
} else {
    resultado = "Tu pantalla es de tamaño: XL";
}

 document.getElementById("resultado").textContent = resultado;
 
}