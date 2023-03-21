"use client";

import { useEffect, useState } from "react";
import { useSupabase } from "../../components/supabase-provider";

import type { Database } from "../../lib/database.types";

type Message = Database["public"]["Tables"]["messages"]["Row"];

// realtime subscriptions need to be set up client-side
// this component takes initial messages as props and automatically
// updates when new messages are inserted into Supabase's `messages` table
export default function RealtimeMessages({
  serverMessages: serverMessages,
}: {
  serverMessages: Message[];
}) {
  const [messages, setMessages] = useState(serverMessages);
  const { supabase } = useSupabase();

  useEffect(() => {
    // this overwrites `messages` any time the `serverMessages` prop changes
    // this happens when the parent Server Component is re-rendered
    setMessages(serverMessages);
  }, [serverMessages]);

  useEffect(() => {
    // ensure you have enabled replication on the `messages` table
    // https://app.supabase.com/project/_/database/replication
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => setMessages([...messages, payload.new as Message]),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, setMessages, messages]);

  //   return <pre>{JSON.stringify(messages, null, 2)}</pre>;

  return (
    <ul>
      {messages?.map((msg) => (
        <li key={msg.id}>{msg.message}</li>
      ))}
    </ul>
  );
}
