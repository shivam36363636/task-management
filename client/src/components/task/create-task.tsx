"use client";

import { useEffect, useState } from "react";
import { CreateTaskLayout } from "./layout";
import TextareaField from "../fields/textarea-field";
import SingleSelectField from "../fields/single-select-field";
import MultiSelectField from "../fields/multi-select-field";
import InputField from "../fields/input-field";
import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import { useCreateTask } from "@/hooks/useCreateTask";
import { toast } from "react-hot-toast";
import useStore from "@/state/state-store";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useGetTaskById } from "@/hooks/useGetTaskById";
import { X } from "lucide-react";

export default function CreateTask() {
    const { setIsCreateTaskOpen } = useStore()
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "not_started",
        assignedTo: [] as string[],
        tag: "",
        priority: "",
        team: ""
    });

    const { data: users, isLoading: usersLoading } = useGetAllUsers();
    const { mutate: createTask, isPending } = useCreateTask();
    const queryClient = useQueryClient();

    const searchParams = useSearchParams();
    const taskId = searchParams.get("taskId");

    
    const { data: taskData ,isLoading: taskLoading } = useGetTaskById(taskId);
    
    useEffect(() => {
        if (taskData) {
            setFormData({
                title: taskData?.data?.data?.title || "",
                description: taskData?.data?.data?.description || "",
                status: taskData?.data?.data?.status || "not_started",
                assignedTo: taskData?.data?.data?.assignedTo || [],
                tag: taskData?.data?.data?.tag || "",
                priority: taskData?.data?.data?.priority || "",
                team: taskData?.data?.data?.team || ""
            })
        }

        return () => {
            setFormData({
                title: "",
                description: "",
                status: "not_started",
                assignedTo: [],
                tag: "",
                priority: "",
                team: ""
            })
        }
    }, [taskData]);



    if (usersLoading || taskLoading) return <div>Loading...</div>;

    const multiSelectOptions = users?.data?.data?.map((user: { name: string, userId: string }) => ({ label: user?.name, value: user?.userId })) || [];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        createTask({
            ...formData,
            userId: user?.userId
        }, {
            onSuccess: () => {
                setFormData({
                    title: "",
                    description: "",
                    status: "not_started",
                    assignedTo: [],
                    tag: "",
                    priority: "",
                    team: ""
                });
                setIsCreateTaskOpen(false);
                queryClient.invalidateQueries({ queryKey: ["tasks"] });
                toast.success("Task created successfully");
            },
            onError: () => {
                toast.error( "Something went wrong");
            }
        });

    }

    

    return (
      <CreateTaskLayout>
        <div className="flex justify-between items-center p-4">
          <h1 className="truncate text-2xl font-bold pb-0">Create Task</h1>
          <X
            className="cursor-pointer"
            onClick={() => setIsCreateTaskOpen(false)}
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
          <InputField
            label="Title"
            placeholder="Enter title"
            value={formData.title}
            onChange={(value) => setFormData({ ...formData, title: value })}
          />
          <TextareaField
            label="Description"
            placeholder="Enter description"
            value={formData.description}
            onChange={(value) =>
              setFormData({ ...formData, description: value })
            }
          />
          <SingleSelectField
            label="Status"
            options={[
              { label: "Not Started", value: "not_started" },
              { label: "In Progress", value: "in_progress" },
              { label: "In QA", value: "in_qa" },
              { label: "Completed", value: "completed" },
            ]}
            value={formData.status}
            onChange={(value) => setFormData({ ...formData, status: value })}
          />
          <MultiSelectField
            label="Assigned To"
            options={multiSelectOptions}
            value={formData.assignedTo}
            onChange={(value) =>
              setFormData({ ...formData, assignedTo: value as string[] })
            }
          />
          <SingleSelectField
            label="Tag"
            options={[
              { label: "Select Tag", value: "" },
              { label: "Bug", value: "bug" },
              { label: "Feature", value: "feature" },
              { label: "Task", value: "task" },
            ]}
            value={formData.tag}
            onChange={(value) =>
              setFormData({ ...formData, tag: value as string })
            }
          />
          <SingleSelectField
            label="Priority"
            options={[
              { label: "Select Priority", value: "" },
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
            value={formData.priority}
            onChange={(value) =>
              setFormData({ ...formData, priority: value as string })
            }
          />
          <SingleSelectField
            label="Team"
            options={[
              { label: "Select Team", value: "" },
              { label: "Development", value: "development" },
              { label: "Design", value: "design" },
              { label: "Marketing", value: "marketing" },
              { label: "Sales", value: "sales" },
              { label: "Support", value: "support" },
              { label: "Finance", value: "finance" },
              { label: "Legal", value: "legal" },
              { label: "HR", value: "hr" },
              { label: "Product", value: "product" },
              { label: "Engineering", value: "engineering" },
              { label: "Customer Success", value: "customer_success" },
              { label: "Other", value: "other" },
            ]}
            value={formData.team}
            onChange={(value) =>
              setFormData({ ...formData, team: value as string })
            }
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Creating..." : taskId ? "Update Task" : "Create Task"}
          </button>
        </form>
      </CreateTaskLayout>
    );
}
