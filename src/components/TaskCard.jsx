import { FaEdit, FaTrash } from "react-icons/fa";
import { useContext, useState } from "react";
import { GlobalDataContext } from "../context/DataContext";
import { GlobalInputContext } from "../context/InputDataContext";

export default function TaskCard({
  task,
  column,
  draggedTask,
  setDraggedTask,
  setCurrentEditId,
  setOpenAddModal,
}) {
  const { setTaskData } = useContext(GlobalDataContext);
  const { setInputData } = useContext(GlobalInputContext);

  function handleDelete(id) {
    setTaskData((prev) =>
      prev.map((column) => ({
        ...column,
        tasks: column.tasks.filter((item) => item.id !== id),
      }))
    );
  }

  function handleOpenEditModal(mode, task) {
    if (mode === "edit") {
      setCurrentEditId(task.id);
      setInputData(task.title);
    } else {
      setCurrentEditId(null);
      setInputData("");
    }
    setOpenAddModal(true);
  }

  function handleDragStart(taskId, fromColumn) {
    setDraggedTask({
      taskId,
      fromColumn,
    });
  }

  function updateTaskColor(title) {
    if (title === "Active") return "#8aceff";
    if (title === "InProgress") return "#fff27e";
    if (title === "Completed") return "#5dff62";
  }

  return (
    <div
      draggable
      onDragStart={() => handleDragStart(task.id, column.title)}
      className={`flex flex-col shrink-0 bg-white h-20 p-2 rounded cursor-move shadow ${
        draggedTask?.taskId === task.id ? "opacity-50" : "opacity-100"
      }`}
      style={{ background: updateTaskColor(column.title) }}
    >
      <div className="flex-1 text-sm font-manrope">{task.title}</div>
      <div className="flex items-center justify-between text-[10px] text-blue-600">
        {new Date(task.dueDate).toLocaleString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          minute: "2-digit",
          hour: "2-digit",
          hourCycle: "h12",
        })}
        <span className="flex gap-2 text-xs cursor-pointer">
          <FaEdit onClick={() => handleOpenEditModal("edit", task)} />
          <FaTrash
            onClick={() => handleDelete(task.id)}
            className="text-red-400"
          />
        </span>
      </div>
    </div>
  );
}
