// File: /lib/services/whatsappService.ts

export async function sendWhatsAppMessage({ to, template = "hello_world" }: { to?: string; template?: string }) {
  const url = `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to: to || process.env.WHATSAPP_TO_NUMBER,
    type: "template",
    template: {
      name: template,
      language: { code: "en_US" },
    },
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`WhatsApp API Error: ${data.error?.message || "Unknown error"}`);
    }

    console.log("✅ WhatsApp message sent:", data);
    return data;
  } catch (error: any) {
    console.error("❌ Failed to send WhatsApp message:", error.message);
    throw error;
  }
}