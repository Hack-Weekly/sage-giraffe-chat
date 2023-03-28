"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "../../components/supabase-provider";

export default function Register() {
  const { supabase, session } = useSupabase();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const router = useRouter();

  function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    supabase.auth.signUp({
      email: mail,
      password: password,
    }).then(result => {
      if (result.error) {
        setError(result.error.message)
      } else {
        router.push("/login")
      }
    });
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <form className="w-full md:w-[500px] py-8 px-6 md:p-16 md:bg-slate-grey-400 text-white rounded-lg"
        method="post"
        onSubmit={handleRegister}>
        <h1 className="text-center mb-3">Register to chat</h1>
        { error &&
          <p className="text-error text-sm">
            { error }
          </p>
        }
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="w-full mt-1"
            type="email"
            id="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            className="w-full mt-1"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-col gap-5">
          <button type="submit" className="primary-button w-full">
            Submit
          </button>
          <span className="border-t-2 border-slate-grey-600 opacity-30"></span>
          <button
            onClick={() => router.push("/login")}
            className="text-button"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
}
