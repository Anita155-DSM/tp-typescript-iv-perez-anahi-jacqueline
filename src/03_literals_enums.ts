
export type OrderStatus = "pending" | "shipped" | "delivered";

export let orderStatus: OrderStatus = "pending";
console.log("el estado es:", orderStatus);

orderStatus = "shipped";
console.log("el estado ahora es:", orderStatus);

export enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error"
}

export function logMessage(level: LogLevel, message: string) {
  console.log("log:", level, message);
}

logMessage(LogLevel.Info, "todo ok");
logMessage(LogLevel.Warning, "poco stock");
logMessage(LogLevel.Error, "hubo un error");
