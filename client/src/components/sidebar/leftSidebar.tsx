"use client";

import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import LogoComponent from "../logo-component";
import { LeftSidebarLayout } from "./layout";
import TasksFilter from "./tasks-filter";

const teamData = [
  { id: 1, name: "Development", key: "development" },
  { id: 2, name: "Design", key: "design" },
  { id: 3, name: "Marketing", key: "marketing" },
  { id: 4, name: "Sales", key: "sales" },
  { id: 5, name: "Support", key: "support" },
  { id: 6, name: "Finance", key: "finance" },
  { id: 7, name: "Legal", key: "legal" },
  { id: 8, name: "HR", key: "hr" },
  { id: 9, name: "Product", key: "product" },
  { id: 10, name: "Customer Success", key: "customer_success" },
  { id: 11, name: "Other", key: "other" },
];

const priorityData = [
  { id: 1, name: "Low", key: "low" },
  { id: 2, name: "Medium", key: "medium" },
  { id: 3, name: "High", key: "high" },
];

const tagData = [
  { id: 1, name: "Bug", key: "bug" },
  { id: 2, name: "Feature", key: "feature" },
  { id: 3, name: "Task", key: "task" },
];

export default function LeftSidebar() {
  return (
    <LeftSidebarLayout>
      <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm">
        <div className="p-4 border-b border-gray-100">
          <LogoComponent isOpen={false} />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <div className="space-y-1 py-2">
            <TasksFilter title="All Teams" data={teamData} />
            <TasksFilter title="All Priorities" data={priorityData} />
            <TasksFilter title="All Tags" data={tagData} />
          </div>
        </div>
        <div className="border-t border-gray-100 bg-white/90 p-2 space-y-1">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 group">
            <Settings className="h-4 w-4 transition-transform duration-200 group-hover:rotate-45" />
            <span className="text-sm font-medium truncate">Settings</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group">
            <LogOut className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            <span className="text-sm font-medium truncate">Logout</span>
          </button>
        </div>
      </div>
    </LeftSidebarLayout>
  );
}
