import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">Welcome to Zušflix.</h1>
      <p>Login to continue</p>
      <Link className="p-5 bg-blue-500 text-white" href="/dashboard">
        Login
      </Link>
    </main>
  );
}
