const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(resolve => {
        rl.question(texto, respuesta => {
            resolve(respuesta);
        });
    });
}

async function main() {

    let totalGeneral = 0;
    let totalCombos = 0;

    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;

    let opcion;

    do {

        console.log("\n====== MANO BIENVENIDO A BURGER PALACE  ======");
        console.log("1. Combo Clásica - $15000");
        console.log("2. Combo Doble Poder - $22000");
        console.log("3. Combo Mega Fest - $35000");
        console.log("4. Finalizar pedido");

        opcion = Number(await preguntar("Seleccione una opción (1-4): "));

        let precio = 0;
        let nombreCombo = "";

        if (opcion === 1) {
            precio = 15000;
            nombreCombo = "Clásica";
        } 
        else if (opcion === 2) {
            precio = 22000;
            nombreCombo = "Doble Poder";
        } 
        else if (opcion === 3) {
            precio = 35000;
            nombreCombo = "Mega Fest";
        } 
        else if (opcion === 4) {
            break;
        } 
        else {
            console.log(" Opción no válida");
            continue;
        }

        let cantidad = Number(await preguntar("¿Cuántos combos desea? "));

        let subtotal = precio * cantidad;

        totalGeneral += subtotal;
        totalCombos += cantidad;

        if (opcion === 1) contador1 += cantidad;
        if (opcion === 2) contador2 += cantidad;
        if (opcion === 3) contador3 += cantidad;

        console.log("\n--- Pedido agregado ---");
        console.log("Combo: " + nombreCombo);
        console.log("Cantidad: " + cantidad);
        console.log("Subtotal: $" + subtotal);
        console.log("Total acumulado: $" + totalGeneral);

    } while (opcion !== 4);

    console.log("\n====== RESUMEN FINAL ======");
    console.log("Total de combos pedidos: " + totalCombos);
    console.log("Clásica: " + contador1);
    console.log("Doble Poder: " + contador2);
    console.log("Mega Fest: " + contador3);
    console.log("TOTAL A PAGAR: $" + totalGeneral);

    rl.close();
}

main();