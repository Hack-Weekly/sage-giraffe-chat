"use client";

import { FormEvent, useState } from "react";
import { useSupabase } from "../../components/supabase-provider";

import "./page.css";

export default function Login() {
  const { supabase, session } = useSupabase();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email: mail,
      password: password,
    });
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
        <form className="form p-16 bg-slate-grey-400 text-white rounded-lg" onSubmit={handleLogin}>
            <h3 className='header text-center mb-3'>Login to live chat</h3>
            <div className="form-group p-2">
                <label className="block" htmlFor="name">Email Address</label>
                <input className="w-full"
                  type="email"
                  id="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)} />
            </div>
            <div className="form-group p-2">
                <label className="block" htmlFor="password">Password</label>
                <input className="w-full"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group p-2">
                <button type="submit" className="primary-button">Submit</button>
            </div>
        </form>
    </div>
  );
}
