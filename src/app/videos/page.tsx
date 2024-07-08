import SideNav from "@/app/ui/dashboard/sidenav";

export default function Page() {
  return (
    <>
      <SideNav />
      <div className="h-screen bg-blue-100">Videos Content</div>
      <div className="h-screen bg-red-100">Videos Content</div>
    </>
  );
}
