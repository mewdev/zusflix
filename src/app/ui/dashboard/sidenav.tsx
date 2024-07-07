import ZusflixLogo from "@/app/ui/ZusflixLogo";
import NavLinks from "@/app/ui/dashboard/NavLinks";

export default function SideNav() {
  return (
    <div className="bg-gray-300 flex gap-2 items-center p-5">
      <ZusflixLogo />
      <NavLinks />
    </div>
  );
}
