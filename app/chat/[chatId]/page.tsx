import MessageInput from "@/components/Controls/MessageInput";
import TextArea from "@/components/Controls/TextArea";
import ChatHeader from "@/components/Layouts/ChatHeader";
import ChatMessages from "@/components/Misc/ChatMessages";
import Message from "@/components/Misc/Message";
import { ChangeEvent } from "react";

type Props = {
  params: { chatId: string };
};

async function fetchChatData(chatId: string) {
  return "Chat name " + chatId;
}

const ChatContent = async ({ params: { chatId } }: Props) => {
  const chatName = await fetchChatData(chatId);
  return (
    <div className="mt-[120px] h-full">
      <ChatHeader chatName={chatName} />
      <div className="flex flex-col justify-between h-full max-w-[762px] mx-auto">
        <ChatMessages chatRoomId={chatId} />
        <div className=" mb-7 sticky bottom-0 left-0">
          <MessageInput chatId={chatId} />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
