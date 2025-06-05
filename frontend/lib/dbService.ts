import { supabase } from "@/lib/supabase";
import { ContactPayload, getCategory, getPriority, getTags } from "@/lib/messageProcessor";

export async function saveContactMessage(payload: ContactPayload) {
  const { name, email, message, source_page } = payload;

  const category = getCategory(message);
  const priority = getPriority(message);
  const tags = getTags(message);

  const { error } = await supabase.from("contact_messages").insert([
    {
      name,
      email,
      message,
      source_page,
      category,
      priority,
      tags,
    },
  ]);

  if (error) throw new Error(`Supabase insert error: ${error.message}`);
}
