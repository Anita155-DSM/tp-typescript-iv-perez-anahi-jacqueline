
export function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const stockInicial = 10;
const cambio = 2;

const nuevoStock = updateStock(stockInicial, cambio);
console.log("el nuevo stock es:", nuevoStock);
