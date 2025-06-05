import { supabase } from "@/lib/supabase";
import { getCategory, getPriority, getTags } from "@/lib/messageProcessor";

export async function saveContactMessage({
  name,
  email,
  message,
  source_page,
}: {
  name: string;
  email: string;
  message: string;
  source_page: string | null;
}) {
  const category = getCategory(message);
  const priority = getPriority(message);
  const tags = getTags(message);

  const { error } = await supabase.from("contact_messages").insert([
    {
      name,
      email,
      message,
      category,
      priority,
      tags,
    },
  ]);

  if (error) throw new Error(error.message);
}
