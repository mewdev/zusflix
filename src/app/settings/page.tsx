import SideNav from "@/app/ui/dashboard/SideNav";
import SearchBar from "@/app/ui/SearchBar";
import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <>
      <SideNav />
      <SearchBar />
      <Container>
        <div className=" bg-blue-100 h-screen">Settings Content</div>
        <div className=" bg-red-100 h-screen">Settings Content</div>
      </Container>
    </>
  );
}
