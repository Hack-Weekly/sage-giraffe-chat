import ChatHeader from "./ChatHeader";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const SidebarLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <div className="px-10 flex flex-col gap-2 sm:ml-64 h-screen">
        {children}
      </div>
    </>
  );
};

export default SidebarLayout;
