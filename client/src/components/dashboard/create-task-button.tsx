"use client";

import useStore from "@/state/state-store";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateTaskButton() {
  const { setIsCreateTaskOpen } = useStore();
  const router = useRouter();
  return (
    <button
      className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600"
      onClick={() => {
        router.push("/dashboard");

        setIsCreateTaskOpen(true);
      }}
    >
      <PlusIcon className="w-4 h-4" />
      Create Task
    </button>
  );
}
