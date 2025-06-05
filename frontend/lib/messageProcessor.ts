// File: /lib/messageProcessor.ts

export function getCategory(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("inversión") || lower.includes("comprar")) return "Inversión";
  if (lower.includes("venta") || lower.includes("vender")) return "Venta";
  if (lower.includes("alquiler") || lower.includes("rentar")) return "Alquiler";
  if (lower.includes("socios") || lower.includes("colaboración")) return "Alianzas";
  if (lower.includes("trabajo") || lower.includes("empleo")) return "RRHH";
  return "General";
}

export function getPriority(message: string): "Alta" | "Media" | "Baja" {
  const lower = message.toLowerCase();
  if (lower.includes("urgente") || lower.includes("ahora") || lower.includes("rápido")) return "Alta";
  if (lower.includes("consulta") || lower.includes("pregunta")) return "Media";
  return "Baja";
}

export function getTags(message: string): string[] {
  const lower = message.toLowerCase();
  const tags: string[] = [];

  if (lower.includes("tulum")) tags.push("Tulum");
  if (lower.includes("usdt") || lower.includes("cripto")) tags.push("Crypto");
  if (lower.includes("dólar") || lower.includes("usd")) tags.push("Dólar");
  if (lower.includes("rendimiento") || lower.includes("roi")) tags.push("Rentabilidad");
  if (lower.includes("mexico") || lower.includes("cdmx")) tags.push("México");

  return tags;
}