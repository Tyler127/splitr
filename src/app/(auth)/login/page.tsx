import Image from "next/image";
import Link from "next/link";

export default function Login() {
  async function attemptLogin(formData: FormData) {
    'use server'

    const rawFormData = {
      email: formData.get('username'),
      password: formData.get('password'),
    }

    console.log(rawFormData);
  }

  return (
    <main className="flex justify-center">
    <div className="flex p-5 min-h-screen flex-col items-center bg-white w-2/3">
      <h1 className="text-3xl font-bold pb-5">Login</h1>

      <div className="">
            <form action={attemptLogin}>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="username">User (email):</label>
                    <input id="username" type="text" className="bg-slate-200 rounded-lg" name="username" required></input>
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" className="bg-slate-200 rounded-lg" name="password" required></input>
                </div>

                <div className="flex flex-col mt-6">
                    <div id="invalid"></div>
                    <button type="submit" className="bg-lime-300 rounded-lg p-2">Login</button>
                </div>
            </form>
        </div>

      <p className="mt-6">Not a member? <Link className="hover:underline" href="/register">Sign up</Link></p>
    </div>
  </main>
  );
}
