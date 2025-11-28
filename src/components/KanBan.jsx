import { useContext, useState } from "react";
import { GlobalDataContext } from "../context/DataContext";
import TaskCard from "./TaskCard";

export default function KanBan({ setCurrentEditId, setOpenAddModal }) {
  const { taskData, setTaskData } = useContext(GlobalDataContext);
  const [draggedTask, setDraggedTask] = useState(null);

  function handleDrop(toColumn) {
    if (!draggedTask) return;

    if (draggedTask.fromColumn === toColumn) {
      setDraggedTask(null);
      return;
    }

    setTaskData((prev) =>
      prev.map((column) => {
        //first remove from column
        if (column.title === draggedTask.fromColumn) {
          return {
            ...column,
            tasks: column.tasks.filter(
              (task) => task.id !== draggedTask.taskId
            ),
          };
        }
        // add to the column
        if (column.title === toColumn) {
          const task = prev
            .find((col) => col.title === draggedTask.fromColumn)
            .tasks.find((t) => t.id === draggedTask.taskId);

          return {
            ...column,
            tasks: [...column.tasks, task],
          };
        }
        return column;
      })
    );
    setDraggedTask(null);
  }

  return (
    <section className="grid grid-cols-3 h-95 w-full p-2 pt-0 gap-2">
      {taskData.map((column) => {
        return (
          <article
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(column.title)}
            key={column.id}
            className="article h-92 flex flex-col gap-2 "
          >
            <h1 className="text-sm font-bold">
              {column.title} <span>({column.tasks.length})</span>
            </h1>
            <div className="flex flex-col relative gap-2 pr-1 overflow-y-auto rounded">
              {column.tasks.map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    task={task}
                    setCurrentEditId={setCurrentEditId}
                    setOpenAddModal={setOpenAddModal}
                    column={column}
                    draggedTask={draggedTask}
                    setDraggedTask={setDraggedTask}
                  />
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}
