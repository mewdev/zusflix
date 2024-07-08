import SideNav from "@/app/ui/dashboard/sidenav";
import SearchBar from "@/app/ui/search-bar";

export default function Page() {
  return (
    <>
      <SideNav />
      <SearchBar />
      <div className="ml-40 h-screen bg-blue-100">Dashboard Content</div>
      <div className="ml-40 h-screen bg-red-100">Dashboard Content</div>
    </>
  );
}
