import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const handleSubmit = () => {

  }

  return (
    <main className="flex justify-center">
    <div className="flex p-5 min-h-screen flex-col items-center bg-white w-2/3">
      <h1 className="text-3xl font-bold pb-5">Register</h1>

      <div className="">
          <form id="createAccForm">
              <div className="mb-4 flex flex-col">
                <label htmlFor="username">User (email):</label>
                <input id="username"  type="email" className="bg-slate-200 rounded-lg" name="username" required></input>
              </div>

              <div className="mb-4 flex flex-col">
                  <label htmlFor="username">Name:</label>
                  <input id="name" type="text" className="bg-slate-200 rounded-lg" name="name" required></input>
              </div>

              <div className="mb-4 flex flex-col">
                  <label htmlFor="password1">Password:</label>
                  <input id="password1" type="password" className="bg-slate-200 rounded-lg" name="password1" required></input>
              </div>
              
              <div className="mb-4 flex flex-col">
                  <label htmlFor="password2">Confirm Password:</label>
                  <input id="password2" type="password" className="bg-slate-200 rounded-lg" name="password2" required></input>
              </div>

              <div className="flex flex-col mt-6">
                <div id="invalid"></div>
                <button type="submit" className="bg-lime-300 rounded-lg p-2">Register</button>
              </div>
          </form>
      </div>

      <p className="mt-6">Already have an account? <Link className="hover:underline" href="/login">Login</Link></p>
    </div>
  </main>
  );
}
