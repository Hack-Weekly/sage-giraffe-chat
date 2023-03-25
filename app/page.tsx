"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useSupabase } from "@/components/supabase-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    } else {
      router.push("/chat");
    }
  }, [session?.user]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-10 bg-slate-grey-700 rounded-xl">
        <h3>Loading...</h3>
      </div>
    </div>
  );
}
