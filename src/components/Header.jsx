import { FaBell, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { GlobalInputContext } from "../context/InputDataContext";

export default function Header({ setOpenAddModal }) {
  const { search, setSearch } = useContext(GlobalInputContext);

  function handleAddModal() {
    setOpenAddModal(true);
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <header className="flex items-center px-4 text-white h-14 w-full backdrop-blur-sm backdrop-brightness-85">
      <div className="px-2 py-0.5 bg-gray-800/50 rounded">
        <h1>KanBan Board</h1>
      </div>
      <div className="ml-auto">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
          className="bg-white/30 px-2 py-0.5 font-manrope placeholder:text-sm placeholder:text-white rounded outline-none"
        />
      </div>
      <div className="mx-4 bg-white/30 px-2 py-1.5 rounded cursor-pointer">
        <FaBell />
      </div>
      <div
        onClick={handleAddModal}
        className="px-2 py-1 justify-end bg-white/40 rounded cursor-pointer hover:scale-105"
      >
        <FaPlus className="text-xl" />
      </div>
    </header>
  );
}
