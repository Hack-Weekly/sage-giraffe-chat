import "server-only";

import { createServerClient } from "../../utils/supabase-server";

// do not cache this page
export const revalidate = 0;

// the user will be redirected to the landing page if they are not signed in
// check middleware.tsx to see how this routing rule is set
export default async function RequiredSession() {
  const supabase = createServerClient();
  const { data } = await supabase.from("messages").select("*");

  return (
    <ul>
      {data?.map((msg) => (
        <li key={msg.id}>{msg.message}</li>
      ))}
    </ul>
  );
}
