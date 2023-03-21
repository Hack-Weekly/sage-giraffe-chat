"use client";

import { useEffect, useState } from "react";
import { useSupabase } from "../../components/supabase-provider";

import type { Database } from "../../lib/database.types";

type Message = Database["public"]["Tables"]["messages"]["Row"];

export default function Messages({
  serverMessages: serverMessages,
}: {
  serverMessages: Message[];
}) {
  const [messages, setMessages] = useState(serverMessages);
  const { supabase } = useSupabase();

  useEffect(() => {
    setMessages(serverMessages);
  }, [serverMessages]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) =>
          setMessages((messages) => [...messages, payload.new as Message]),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, setMessages, messages]);

  return <pre>{JSON.stringify(messages, null, 2)}</pre>;
}
