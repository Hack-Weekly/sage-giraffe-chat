import ChatHeader from "@/components/Layouts/ChatHeader";
import Sidebar from "@/components/Layouts/Sidebar";
import SidebarLayout from "@/components/Layouts/SidebarLayout";

type Props = {
  children: React.ReactNode;
};

const ChatLayout = ({ children }: Props) => {
  return <SidebarLayout>{children}</SidebarLayout>;
};

export default ChatLayout;
