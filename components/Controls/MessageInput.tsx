"use client";

import { ChangeEvent, useState } from "react";
import TextArea from "./TextArea";
import { useSupabase } from "../supabase-provider";

type Props = {
  chatId: string;
};

const MessageInput = ({ chatId }: Props) => {
  const [value, setValue] = useState("");
  const { supabase } = useSupabase();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const user = await supabase.auth.getUser();
      await supabase.from("messages").insert([
        {
          // @ts-ignore
          chatRoomId: chatId,
          message_text: value,
          user_id: user.data.user?.id,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TextArea
      value={value}
      onChange={handleChange}
      placeholder="Write a message..."
    />
  );
};

export default MessageInput;
