// Use when client needs JS
"use client";

import { LayoutGrid, Clapperboard, Settings } from "lucide-react";

import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutGrid size={40} strokeWidth={2} />,
  },
  {
    name: "Videos",
    href: "/videos",
    icon: <Clapperboard size={40} strokeWidth={2} />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings size={40} strokeWidth={2} />,
  },
];

export default function NavLinks() {
  return (
    <div className="flex flex-col gap-10">
      {links.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            <div className=" hover:text-blue-500">{link.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}
