"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSupabase } from "../../components/supabase-provider";

import "./page.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email: mail,
      password: password,
    });
  }

  useEffect(() => {
    if (session?.user) {
      router.replace("/chat");
    }
  }, [session?.user]);

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <form
        className="form p-16 bg-slate-grey-400 text-white rounded-lg"
        onSubmit={handleLogin}
      >
        <h3 className="header text-center mb-3">Login to live chat</h3>
        <div className="form-group p-2">
          <label className="block" htmlFor="name">
            Email Address
          </label>
          <input
            className="w-full"
            type="email"
            id="email"
            autoComplete="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group p-2">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-full"
            type="password"
            autoComplete="current-password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group p-2 flex flex-col gap-5">
          <button type="submit" className="primary-button w-full">
            Submit
          </button>
          <span className=" border-t-2 border-slate-grey-600 opacity-30"></span>
          <button
            onClick={() => router.push("/register")}
            className="text-button"
          >
            New user? Register here
          </button>
        </div>
      </form>
    </div>
  );
}
