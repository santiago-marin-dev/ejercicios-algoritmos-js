let clientes = [
    { nombre: "pangolin", horas: 15 },
    { nombre: "marulete", horas: 10 },
    { nombre: "nirvana", horas: 14 },
    { nombre: "robtob", horas: 8 },
    { nombre: "tio gilipollas de cj", horas: 13 }
];

let totalDia = 0;
let clientesConDescuento = 0;

for (let i = 0; i < clientes.length; i++) {

    let nombre = clientes[i].nombre;
    let horas = clientes[i].horas;

    let subtotal = horas * 5000;
    let descuento = 0;
    let total = 0;

    if (horas > 12) {
        descuento = subtotal * 0.3;
        total = subtotal - descuento;
        clientesConDescuento++;
    } else {
        total = subtotal;
    }

    console.log("\n--- CLIENTE " + (i + 1) + ": " + nombre + " ---");
    console.log("Horas alquiladas: " + horas);
    console.log("Subtotal: $" + subtotal.toLocaleString("es-CO"));
    console.log("Descuento (30%): $" + descuento.toLocaleString("es-CO"));
    console.log(horas > 12 ? "— CON DESCUENTO" : "— SIN DESCUENTO");
    console.log("Total a pagar: $" + total.toLocaleString("es-CO"));

    totalDia += total;
}

console.log("\n=== RESUMEN DEL DÍA ===");
console.log("Clientes atendidos: " + clientes.length);
console.log("Ingreso total: $" + totalDia.toLocaleString("es-CO"));
console.log("Clientes con descuento: " + clientesConDescuento);

 

