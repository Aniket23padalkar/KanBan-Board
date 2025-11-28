import KanBan from "./components/KanBan";
import Header from "./components/Header";
import AddModal from "./components/AddModal";
import { useState } from "react";
import GlobalInputStateContext from "./context/InputDataContext";

export default function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [currentEditId, setCurrentEditId] = useState("");
  return (
    <main className="flex flex-col gap-2 h-110 w-200 shadow-xl shadow-gray-800 rounded overflow-hidden ">
      <Header setOpenAddModal={setOpenAddModal} />

      <GlobalInputStateContext>
        <KanBan
          setCurrentEditId={setCurrentEditId}
          setOpenAddModal={setOpenAddModal}
        />

        {openAddModal && (
          <AddModal
            setOpenAddModal={setOpenAddModal}
            currentEditId={currentEditId}
          />
        )}
      </GlobalInputStateContext>
    </main>
  );
}
