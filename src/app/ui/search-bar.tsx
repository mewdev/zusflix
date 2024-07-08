import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <>
      <div className="bg-red-400 flex justify-center sticky top-0 z-10 h-10 items-center p-10">
        <form className="flex">
          <Search />
          <input
            type="text"
            placeholder="Search for movie"
            className="bg-red-100"
          />
          <button className="bg-red-900 text-white">Search</button>
        </form>
      </div>
    </>
  );
}
