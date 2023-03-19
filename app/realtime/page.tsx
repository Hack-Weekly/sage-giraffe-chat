import "server-only";

import { createServerClient } from "../../utils/supabase-server";
import NewMessage from "./new-message";
import RealtimeMessages from "./realtime-messages";

// do not cache this page
export const revalidate = 0;

// this component fetches the current messages server-side
// and subscribes to new messages client-side
export default async function Realtime() {
  const supabase = createServerClient();
  const { data } = await supabase.from("messages").select("*");

  // data can be passed from server components to client components
  // this allows us to fetch the initial messages before rendering the page
  // our <RealtimeMessages /> component will then subscribe to new messages client-side
  return (
    <>
      <RealtimeMessages serverMessages={data || []} />
      <NewMessage />
    </>
  );
}
