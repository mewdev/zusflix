import { LayoutGrid, Clapperboard, Settings } from "lucide-react";

import Link from "next/link";

const linksData: { name: string; href: string; icon: any }[] = [
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
    <div className="flex lg:flex-col gap-10">
      {linksData.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            <div className=" hover:text-blue-500">{link.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}
