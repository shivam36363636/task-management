"use client";

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
      <div className="p-4  ">
        <LogoComponent isOpen={false} />
        <TasksFilter title="All Teams" data={teamData} />
        <TasksFilter title="All Priorities" data={priorityData} />
        <TasksFilter title="All Tags" data={tagData} />
      </div>
    </LeftSidebarLayout>
  );
}
