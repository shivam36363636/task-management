import Header from "@/components/dashboard/header";
import TaskBoard from "@/components/dashboard/task-board";

export default function Dashboard() {
  return (
    <div className="p-4 h-full flex flex-col gap-4">
      <Header />
      <TaskBoard />
    </div>
  )
}
