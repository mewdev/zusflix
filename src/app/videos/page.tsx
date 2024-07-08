import SideNav from "@/app/ui/dashboard/sidenav";
import SearchBar from "@/app/ui/search-bar";

export default function Page() {
  return (
    <>
      <SideNav />
      <SearchBar />
      <div className="lg:ml-28">
        <div className=" bg-blue-100 h-screen">Video Content</div>
        <div className=" bg-red-100 h-screen">Video Content</div>
      </div>
    </>
  );
}
