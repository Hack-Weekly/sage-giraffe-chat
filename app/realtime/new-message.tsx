"use client";

import { useSupabase } from "../../components/supabase-provider";

export default function NewMessage() {
  const { supabase, session } = useSupabase();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      message: { value: string };
    };
    const message = target.message.value;
    console.log(message);
    const result = await supabase
      .from("messages")
      .insert({ message: message })
      .select();
    console.log(result);
    // no need to refresh, as we are subscribed to db changes in `./realtime-messages.tsx`
  };

  return session ? (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button>Send</button>
      </form>
    </>
  ) : (
    <p>Sign in to see messages</p>
  );
}
