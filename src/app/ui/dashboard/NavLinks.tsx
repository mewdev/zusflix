import Link from "next/link";

const linksData = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Videos", href: "/videos" },
];

export default function NavLinks() {
  return (
    <>
      {linksData.map((linkItem) => {
        return (
          <Link href={linkItem.href} key={linkItem.name}>
            <p>{linkItem.name}</p>
          </Link>
        );
      })}
    </>
  );
}
