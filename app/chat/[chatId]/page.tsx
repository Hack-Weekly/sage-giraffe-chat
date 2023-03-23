import ChatHeader from "@/components/Layouts/ChatHeader";
import Message from "@/components/Misc/Message";

type Props = {
  params: { chatId: string };
};

async function fetchChatData(chatId: string) {
  return "Chat name " + chatId;
}

const ChatContent = async ({ params: { chatId } }: Props) => {
  const chatName = await fetchChatData(chatId);
  return (
    <div className="mt-[120px]">
      <ChatHeader chatName={chatName} />
      <div className="flex flex-col gap-2">
        <Message
          messageText="Message text"
          userName="Username"
          timeStamp={new Date()}
        />
        <Message
          messageText="Message text"
          userName="Username"
          timeStamp={new Date()}
        />
      </div>
    </div>
  );
};

export default ChatContent;
