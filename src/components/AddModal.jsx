import { useContext, useState } from "react";
import { GlobalDataContext } from "../context/DataContext";
import { GlobalInputContext } from "../context/InputDataContext";

export default function AddModal({ setOpenAddModal, currentEditId }) {
  const { setTaskData } = useContext(GlobalDataContext);
  const { inputData, setInputData } = useContext(GlobalInputContext);

  function handleChange(e) {
    setInputData(e.target.value);
  }

  function handleAddModal() {
    setOpenAddModal(false);
    setInputData("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTaskData((prev) =>
      prev.map((column) => {
        if (currentEditId) {
          return {
            ...column,
            tasks: column.tasks.map((task) =>
              task.id === currentEditId ? { ...task, title: inputData } : task
            ),
          };
        }

        if (column.title === "Active") {
          return {
            ...column,
            tasks: [
              ...column.tasks,
              {
                id: crypto.randomUUID(),
                title: inputData,
                dueDate: Date.now(),
              },
            ],
          };
        }
        return column;
      })
    );

    setInputData("");
    setOpenAddModal(false);
  }

  return (
    <div className="flex flex-col absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-90 rounded z-10 bg-gray-200 shadow-lg shadow-gray-500 ">
      <h1 className="text-xs font-bold">Add-Task</h1>
      <form onSubmit={handleSubmit} className="flex flex-col flex-1 pt-2">
        <input
          required
          value={inputData}
          onChange={handleChange}
          type="text"
          placeholder="task"
          className="w-full border border-blue-300 rounded text-sm p-2 outline-blue-400 font-manrope"
        />
        <div className="flex flex-1 items-end justify-end gap-4">
          <button className="text-xs bg-blue-400 px-4 py-0.5 rounded text-blue-800 hover:scale-105 cursor-pointer">
            Save
          </button>
          <button
            onClick={handleAddModal}
            type="button"
            className="text-xs bg-blue-100 border border-blue-600 text-blue-800 px-2 h-5 rounded hover:scale-105 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
