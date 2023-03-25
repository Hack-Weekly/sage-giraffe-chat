type Props = {
  messageText: string;
  userName: string;
  timeStamp: Date;
  isSelf?: boolean;
};

const Message = ({
  messageText,
  userName,
  timeStamp,
  isSelf = false,
}: Props) => {
  const alignStyles = isSelf ? "self-start" : "self-end";
  return (
    <div className={`flex flex-col max-w-[460px] min-w-[200px] ${alignStyles}`}>
      <div className="flex gap-1.5 items-center mb-0.5">
        <span className=" ml-2.5 w-1.5 h-1.5 bg-burnt-pumpkin-base rounded-full"></span>
        <p className="body-1">{userName}</p>
        {isSelf && <p className="body-1 text-slate-grey-400"> (You)</p>}
      </div>
      <div className={`p-2.5 rounded-lg bg-slate-grey-800`}>{messageText}</div>
      <div className="flex justify-end">
        <p className="text-overline mt-0.5">{timeStamp.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Message;
