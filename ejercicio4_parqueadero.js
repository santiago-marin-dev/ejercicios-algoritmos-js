const prompt = require('prompt-sync')({ sigint: true });

// Variables acumuladoras y contadores
let contMotos = 0;
let contCarros = 0;
let contCamionetas = 0;
let ingresoTotal = 0;
let sumaHoras = 0;
let totalVehiculos = 0;

let opcionMenu = 0;

// WHILE principal
while (opcionMenu !== 2) {

    console.log("\n=== PARQUIFÁCIL ===");
    console.log("1. Registrar vehículo");
    console.log("2. Cerrar jornada");

    opcionMenu = parseInt(prompt("Seleccione una opción: "));

    if (opcionMenu === 1) {

        let tipoVehiculo = parseInt(prompt("Tipo de vehículo (1=Moto, 2=Carro, 3=Camioneta): "));
        let horasPermanencia = parseFloat(prompt("Horas de permanencia: "));

        let tarifaHora = 0;
        let tipoTexto = "";

        // Asignar tarifa con if / else if / else
        if (tipoVehiculo === 1) {
            tarifaHora = 2000;
            tipoTexto = "Moto";
            contMotos++;
        } else if (tipoVehiculo === 2) {
            tarifaHora = 4000;
            tipoTexto = "Carro";
            contCarros++;
        } else if (tipoVehiculo === 3) {
            tarifaHora = 6000;
            tipoTexto = "Camioneta";
            contCamionetas++;
        } else {
            console.log(" Tipo inválido. Volviendo al menú...");
            continue; // vuelve al menú
        }

        let costoTotal = tarifaHora * horasPermanencia;
        let descuento = 0;

        // Verificar si aplica descuento
        if (horasPermanencia > 8) {
            descuento = costoTotal * 0.20;
        }

        let totalPagar = costoTotal - descuento;

        // Operador ternario
        let tipoTarifa = horasPermanencia > 8 
            ? "TARIFA DÍA COMPLETO (20% desc.)"
            : "TARIFA POR HORAS";

        // Mostrar detalle
        console.log("\n--- VEHÍCULO REGISTRADO ---");
        console.log(`Tipo: ${tipoTexto}`);
        console.log(`Horas: ${horasPermanencia}`);
        console.log(`Subtotal: $${costoTotal.toLocaleString("es-CO")}`);
        
        if (descuento > 0) {
            console.log(`Descuento (20%): $${descuento.toLocaleString("es-CO")} — ${tipoTarifa}`);
        } else {
            console.log(tipoTarifa);
        }

        console.log(`Total: $${totalPagar.toLocaleString("es-CO")}`);

        // Acumuladores
        ingresoTotal += totalPagar;
        sumaHoras += horasPermanencia;
        totalVehiculos++;

    } else if (opcionMenu !== 2) {
        console.log(" Opción inválida.");
    }
}

// ===== CIERRE DE JORNADA =====

let promedioHoras = totalVehiculos > 0 
    ? (sumaHoras / totalVehiculos).toFixed(1)
    : 0;

console.log("\n=== CIERRE DE JORNADA ===");
console.log(`Motos: ${contMotos} | Carros: ${contCarros} | Camionetas: ${contCamionetas}`);
console.log(`Total vehículos: ${totalVehiculos}`);
console.log(`Ingreso total: $${ingresoTotal.toLocaleString("es-CO")}`);
console.log(`Promedio permanencia: ${promedioHoras} horas`);