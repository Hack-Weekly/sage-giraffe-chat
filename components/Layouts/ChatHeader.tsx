type Props = {
  chatName: string;
};

const ChatHeader = ({ chatName }: Props) => {
  return (
    <header className="sm:ml-64 h-20 fixed top-0 w-full left-0 flex py-5 px-10 bg-slate-grey-800">
      <h3>{chatName}</h3>
    </header>
  );
};

export default ChatHeader;
