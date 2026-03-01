const prompt = require('prompt-sync')({ sigint: true });

// Constantes
const SALARIO_MINIMO = 1300000;
const SUBSIDIO_12 = SALARIO_MINIMO * 0.12;
const SUBSIDIO_15 = SALARIO_MINIMO * 0.15;

// Contadores
let totalRegistrados = 0;
let beneficiarios60a80 = 0;
let beneficiarios80mas = 0;
let noAplican = 0;
let presupuestoTotal = 0;

// Solicitar cantidad de personas
const cantidad = parseInt(prompt("¿Cuántas personas va a registrar? "));

for (let i = 1; i <= cantidad; i++) {
    console.log(`\n--- PERSONA ${i} ---`);

    const nombre = prompt("Nombre completo: ");
    const edad = parseInt(prompt("Edad: "));

    let porcentaje = 0;
    let subsidio = 0;

    // Clasificación con if / else if / else
    if (edad >= 60 && edad <= 80) {
        porcentaje = 12;
        subsidio = SUBSIDIO_12;
        beneficiarios60a80++;
        presupuestoTotal += subsidio;
    } else if (edad > 80) {
        porcentaje = 15;
        subsidio = SUBSIDIO_15;
        beneficiarios80mas++;
        presupuestoTotal += subsidio;
    } else {
        noAplican++;
    }

    // Operador ternario para categoría
    const categoria = edad >= 80 ? "Adulto Mayor Senior" : "Adulto Mayor";

    // Mostrar información individual solo si aplica
    if (edad >= 60) {
        console.log(`--- PERSONA ${i}: ${nombre} ---`);
        console.log(`Edad: ${edad} años`);
        console.log(`Categoría: ${categoria}`);
        console.log(`Subsidio (${porcentaje}%): $${subsidio.toLocaleString("es-CO")}`);
    }

    totalRegistrados++;
}

// ===== RESUMEN FINAL =====
console.log("\n=== INFORME ALCALDÍA DE ARMENIA ===");
console.log(`Total registrados: ${totalRegistrados}`);
console.log(`Beneficiarios (60-80 años): ${beneficiarios60a80} — Subsidio: $${SUBSIDIO_12.toLocaleString("es-CO")} c/u`);
console.log(`Beneficiarios (>80 años): ${beneficiarios80mas} — Subsidio: $${SUBSIDIO_15.toLocaleString("es-CO")} c/u`);
console.log(`No aplican: ${noAplican}`);
console.log(`PRESUPUESTO TOTAL: $${presupuestoTotal.toLocaleString("es-CO")}`);