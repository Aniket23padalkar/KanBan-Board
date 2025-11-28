import { FaPlus } from "react-icons/fa";

export default function Header({ setOpenAddModal }) {
  function handleAddModal() {
    setOpenAddModal(true);
  }
  return (
    <header className="flex items-center justify-between px-4 text-white h-14 w-full backdrop-blur-sm backdrop-brightness-85">
      <div className="px-2 py-0.5 bg-gray-800/50 rounded">
        <h1>KanBan Board</h1>
      </div>
      <div
        onClick={handleAddModal}
        className="px-2 py-1 bg-white/40 rounded cursor-pointer hover:scale-105"
      >
        <FaPlus className="text-xl" />
      </div>
    </header>
  );
}
