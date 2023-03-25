import Message from "./Message";

type Props = {
  chatRoomId: string;
};

const ChatMessages = ({ chatRoomId }: Props) => {
  //   const messages = supabase
  //     .from("messages")
  //     .select("id, message, created_at, users (username)")
  //     .eq("messages.chatRoomId", chatRoomId);

  const messages = {
    data: [
      {
        id: 1,
        message: "Hello",
        created_at: "2021-09-01T00:00:00.000Z",
        username: "user1",
      },
      {
        id: 2,
        message: "Hey!",
        created_at: "2021-09-01T00:00:00.000Z",
        username: "user2",
      },
      {
        id: 3,
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, itaque numquam. Blanditiis, accusantium laboriosam porro nulla officia in, similique aperiam doloremque mollitia at placeat non suscipit perferendis tenetur quaerat praesentium?",
        created_at: "2021-09-01T00:00:00.000Z",
        username: "user1",
      },
    ],
  };

  if (!messages.data) return <p>Loading messages...</p>;
  return (
    <div className="flex flex-col gap-2">
      {messages.data?.map((message) => {
        const isSelf = message.username === "user1";
        return (
          <Message
            key={message.id}
            messageText={message.message}
            userName={message.username}
            timeStamp={new Date(message.created_at)}
            isSelf={isSelf}
          />
        );
      })}
    </div>
  );
};

export default ChatMessages;
