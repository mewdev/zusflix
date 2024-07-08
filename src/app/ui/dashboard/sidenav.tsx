import ZusflixLogo from "@/app/ui/ZusflixLogo";
import NavLinks from "@/app/ui/dashboard/NavLinks";

export default function SideNav() {
  return (
    <nav className="bg-gray-300 w-25 z-20 h-20 lg:h-5/6 flex lg:flex-col gap-2 justify-between items-center p-5 sticky lg:fixed top-0">
      <ZusflixLogo />
      <NavLinks />
      <p>Account</p>
    </nav>
  );
}
