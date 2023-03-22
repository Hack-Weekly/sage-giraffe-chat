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
    await supabase.auth.signUp({
      email: mail,
      password: password,
    });
  }

  return (
    <>
      <form className="form" onSubmit={handleLogin}>
        <h1 className="header">Login to live chat</h1>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
