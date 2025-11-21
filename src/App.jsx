import KanBan from "./components/KanBan";
import Header from "./components/Header";
import AddModal from "./components/AddModal";

export default function App() {
  return (
    <main className="flex flex-col gap-2 h-110 w-200 shadow-xl shadow-gray-800 rounded overflow-hidden ">
      <Header />
      <KanBan />
      <AddModal />
    </main>
  );
}
