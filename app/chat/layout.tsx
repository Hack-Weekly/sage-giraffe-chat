import SidebarLayout from "@/components/Layouts/SidebarLayout";

type Props = {
  children: React.ReactNode;
};

const ChatLayout = ({ children }: Props) => {
  return <SidebarLayout>{children}</SidebarLayout>;
};

export default ChatLayout;
