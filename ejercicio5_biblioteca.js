const prompt = require('prompt-sync')({ sigint: true });

const multaDiaria = 1500;
const multaAdicional = 10000;

let totalMultas = 0;
let totalLibros = 0;
let librosConRetraso = 0;
let librosPuntuales = 0;
let totalUsuarios = 0;

let cantidadUsuarios = parseInt(prompt("Cantidad de usuarios: "));

for (let i = 1; i <= cantidadUsuarios; i++) {

    let nombreUsuario = prompt("Nombre usuario: ");
    let cantidadLibros;

    do {
        cantidadLibros = parseInt(prompt("Cantidad de libros (max 3): "));
    } while (cantidadLibros > 3);

    console.log(`\n--- USUARIO ${i}: ${nombreUsuario} ---`);
    console.log(`Libros devueltos: ${cantidadLibros}`);

    let multaUsuario = 0;

    for (let j = 1; j <= cantidadLibros; j++) {

        let diasPrestamo = parseInt(prompt(`Dias libro ${j}: `));
        let diasRetraso = diasPrestamo > 7 ? diasPrestamo - 7 : 0;
        let multaLibro = 0;

        if (diasRetraso === 0) {
            librosPuntuales++;
        } else if (diasRetraso <= 15) {
            multaLibro = diasRetraso * multaDiaria;
            librosConRetraso++;
        } else {
            multaLibro = (diasRetraso * multaDiaria) + multaAdicional;
            librosConRetraso++;
        }

        multaUsuario += multaLibro;
        totalLibros++;

        if (diasRetraso === 0) {
            console.log(`Libro ${j}: ${diasPrestamo} dias — Sin retraso — Multa: $0`);
        } else {
            console.log(`Libro ${j}: ${diasPrestamo} dias — ${diasRetraso} dias de retraso — Multa: $${multaLibro.toLocaleString("es-CO")}`);
        }
    }

    let clasificacion = multaUsuario > 0 ? "CON RETRASO" : "PUNTUAL";
    console.log(`Multa total usuario: $${multaUsuario.toLocaleString("es-CO")} — ${clasificacion}`);

    totalMultas += multaUsuario;
    totalUsuarios++;
}

console.log("\n=== RESUMEN BIBLIOTECH ===");
console.log(`Usuarios atendidos: ${totalUsuarios}`);
console.log(`Total libros: ${totalLibros}`);
console.log(`Libros puntuales: ${librosPuntuales}`);
console.log(`Libros con retraso: ${librosConRetraso}`);
console.log(`MULTAS RECAUDADAS: $${totalMultas.toLocaleString("es-CO")}`);