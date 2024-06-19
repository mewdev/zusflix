// Use when client needs JS
"use client";

import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Videos", href: "/videos" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
