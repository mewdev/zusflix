import ZusflixLogo from "@/app/ui/zusflix-logo";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
  return (
    <nav className="bg-gray-300 w-25 z-20 h-5/6 flex flex-col gap-2 justify-between items-center p-5 lg:fixed top-0">
      <ZusflixLogo />
      <NavLinks />
      <p>Account</p>
    </nav>
  );
}
