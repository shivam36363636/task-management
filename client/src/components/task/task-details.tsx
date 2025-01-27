"use client";
import useCreateComment from "@/hooks/useCreateComment";
import useGetComments from "@/hooks/useGetComments";
import useStore from "@/state/state-store";
import { X } from "lucide-react";
import { useState } from "react";
import CommentCard from "./comment-card";
import AssignedUsers from "./assigned-users";

const statusDataMap = {
  "not_started": {
    color: "bg-red-500",
    text: "Not Started"
  },
  "in_progress": {
    color: "bg-yellow-500",
    text: "In Progress"
  },
  "completed": {
    color: "bg-green-500",
    text: "Completed"
  },
  "in_qa": {
    color: "bg-blue-500",
    text: "In QA"
  },
};

const priorityDataMap = {
  "low": {
    color: "bg-green-500/20 text-green-700",
    text: "Low"
  },
  "medium": {
    color: "bg-yellow-500/20 text-yellow-700",
    text: "Medium"
  },
  "high": {
    color: "bg-red-500/20 text-red-700",
    text: "High"
  },
};

const tagDataMap = {
  "bug": {
    color: "bg-red-500/20 text-red-700",
    text: "Bug"
  },
  "feature": {
    color: "bg-blue-500/20 text-blue-700",
    text: "Feature"
  },
  "task": {
    color: "bg-green-500/20 text-green-700",
    text: "Task"
  },
};

export const TaskDetails = () => {
  const { mutate: createComment } = useCreateComment();
  const { isTaskDetailsOpen, setIsTaskDetailsOpen } = useStore();
  const { data: commentsData } = useGetComments(isTaskDetailsOpen?._id || "");
  const comments = commentsData?.data || [];
  const [comment, setComment] = useState("");

  const handleCreateComment = () => {
    createComment({
      task: isTaskDetailsOpen?._id || "",
      content: comment,
      user: JSON.parse(localStorage.getItem("user") || "{}").userId || "",
    });
    setComment("");
  };

  if (!isTaskDetailsOpen) return null;
  const { 
    title, 
    description, 
    status, 
    createdAt, 
    updatedAt, 
    priority, 
    tag, 
    team,
    dueDate,
    assignedTo 
  } = isTaskDetailsOpen;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[80vw] h-[85vh] flex overflow-hidden shadow-xl">
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center p-6 border-b">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            </div>
            <X
              className="cursor-pointer hover:text-gray-600 w-6 h-6"
              onClick={() => setIsTaskDetailsOpen(null)}
            />
          </div>
          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            <div>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">Status & Priority</h2>
              <div className="flex items-center gap-3">
                <span className={`${statusDataMap[status as keyof typeof statusDataMap].color} rounded-full text-sm font-medium py-1 px-4 text-white`}>
                  {statusDataMap[status as keyof typeof statusDataMap].text}
                </span>
                <span className={`${priorityDataMap[priority as keyof typeof priorityDataMap].color} rounded-full px-4 py-1 text-sm font-medium`}>
                  {priorityDataMap[priority as keyof typeof priorityDataMap].text}
                </span>
                <span className={`${tagDataMap[tag as keyof typeof tagDataMap].color} rounded-full px-4 py-1 text-sm font-medium`}>
                  {tagDataMap[tag as keyof typeof tagDataMap].text}
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">Description</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">Team</h2>
              <span className="text-sm font-medium text-gray-500 bg-gray-100 rounded-full px-4 py-1.5">
                {team.replace('_', ' ').charAt(0).toUpperCase() + team.slice(1)}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3 text-gray-800">Assigned Users</h2>
              <AssignedUsers assignedUsers={assignedTo} />
            </div>
          </div>
          <div className="p-4 border-t bg-gray-50">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="font-medium">Created:</span>
                <span>{new Date(createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Updated:</span>
                <span>{new Date(updatedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Due Date:</span>
                <span>{new Date(dueDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex flex-col h-full border-l bg-gray-50">
          <div className="p-6 border-b bg-white">
            <h2 className="text-lg font-semibold text-gray-800">Comments</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-4">
              {comments.map((comment: { content: string; _id: string; user: string }) => (
                <CommentCard key={comment._id} content={comment.content} userId={comment.user} />
              ))}
            </div>
          </div>
          <div className="p-6 border-t bg-white">
            <textarea
              className="w-full h-24 p-3 border border-gray-200 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition-colors duration-200 font-medium"
              onClick={handleCreateComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
