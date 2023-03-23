"use client";

import { useSupabase } from "./supabase-provider";

// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();

  const handleEmailLogin = async () => {
    console.log("login with email");
    await supabase.auth.signInWithPassword({
      email: "andresennils68@gmail.com",
      password: "password",
    });
  };

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleRegister = async () => {
    await supabase.auth.signUp({
      email: "some@mail.com",
      password: "password",
    });
  };

  return (
    <>
      <button onClick={handleEmailLogin}>Email Login</button>
      <button onClick={handleGitHubLogin}>GitHub Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleRegister}>Register</button>
    </>
  );
}
