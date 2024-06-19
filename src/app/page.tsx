import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Auth page</h1>
      <Link href="/dashboard">Login</Link>
    </main>
  );
}
