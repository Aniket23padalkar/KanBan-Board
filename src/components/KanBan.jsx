import Completed from "./Completed";
import InProgress from "./InProgress";
import ToDO from "./ToDo";

export default function KanBan() {
  return (
    <section className="grid grid-cols-3 h-full w-full p-2 pt-0 gap-2">
      <ToDO />
      <InProgress />
      <Completed />
    </section>
  );
}
