import UserAvatar from "../Misc/UserAvatar";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <aside className="hidden sm:flex fixed top-0 left-0 z-40 w-64 p-6 bg-slate-grey-600 h-screen flex-col justify-between pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h4>Your profile</h4>
          <UserAvatar username="Username" />
        </div>
        <div className="flex flex-col gap-1">
          <h4>Chatrooms</h4>
          <button className="primary-button">{"Chat room 1"}</button>
          <button className="primary-button">{"Chat room 2"}</button>
          <button className="primary-button">{"Chat room 3"}</button>
        </div>
        <div className="flex flex-col gap-1">
          <h4>Users</h4>
          <UserAvatar username="Username 1" status="Active" />
          <UserAvatar username="Username 2" status="Active" />
          <UserAvatar username="Username 3" status="Inactive" />
          <UserAvatar username="Username 3" status="Do not disturb" />
        </div>
      </div>
      <button className="text-button">Log out</button>
    </aside>
  );
};

export default Sidebar;
