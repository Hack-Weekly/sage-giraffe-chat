type Props = {
  username: string;
  status?: "Active" | "Inactive" | "Do not disturb";
};

const UserAvatar = ({ status, username }: Props) => {
  let statusColor = "bg-success";
  if (status === "Inactive") statusColor = "bg-slate-grey-400";
  if (status === "Do not disturb") statusColor = "bg-warning";
  return (
    <div className="flex gap-2.5">
      <div className="w-12 h-12 bg-slate-grey-400 rounded-full"></div>
      <div className="flex flex-col justify-center">
        <p className="body-1 text-base">{username}</p>
        {status && (
          <div className="flex items-center gap-1.5">
            <span className={"w-1 h-1 rounded " + statusColor}></span>
            <p className="text-overline">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
