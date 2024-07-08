import SideNav from "@/app/ui/dashboard/SideNav";
import SearchBar from "@/app/ui/SearchBar";

export default function Page() {
  return (
    <>
      <SideNav />
      <SearchBar />

      {/* page content wrapper - make component from it */}
      <div className="lg:ml-28">
        <div className=" bg-blue-100 h-screen">Dashboard Content</div>
        <div className=" bg-red-100 h-screen">Dashboard Content</div>
      </div>
    </>
  );
}
