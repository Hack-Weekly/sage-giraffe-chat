type Props = {
  messageText: string;
  userName: string;
  timeStamp: Date;
};

const Message = ({ messageText, userName, timeStamp }: Props) => {
  return (
    <div className="flex flex-col max-w-[460px]">
      <p className="body-1 mb-0.5">{userName}</p>
      <div className="p-2.5 rounded-lg bg-slate-grey-800">{messageText}</div>
      <div className="flex justify-end">
        <p className="text-overline mt-0.5">{timeStamp.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Message;
