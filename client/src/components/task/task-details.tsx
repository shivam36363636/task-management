"use client"
import useStore from "@/state/state-store";
import { X } from "lucide-react";



export const TaskDetails = () => {
  const { isTaskDetailsOpen, setIsTaskDetailsOpen } = useStore();
  if (!isTaskDetailsOpen) return null;
  const { title, description, status, createdAt, updatedAt } = isTaskDetailsOpen;


  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg w-[70vw] h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-bold">{title}</h1>
          <X 
            className="cursor-pointer" 
            onClick={() => setIsTaskDetailsOpen(null)}
          />
        </div>
        <div className="p-4 space-y-4">
          <div>
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{description}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Status</h2>
            <p className="text-gray-600">{status}</p>
          </div>
          <div className="flex gap-4 text-sm text-gray-500">
            <p>Created: {new Date(createdAt).toLocaleDateString()}</p>
            <p>Updated: {new Date(updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
